## Kế hoạch: Song ngữ Vi/En với react-i18next

### 1. Dependencies
- Cài `i18next`, `react-i18next`, `i18next-browser-languagedetector`.

### 2. Cấu trúc file
```
src/i18n/
  index.ts                 // init i18n instance
  locales/
    vi/common.json         // nav, footer, buttons, common labels
    vi/home.json           // trang chủ
    vi/music.json          // /am-nhac
    vi/projects.json       // /du-an + /du-an/$slug
    vi/notes.json          // /ghi-chu
    vi/about.json          // /gioi-thieu
    vi/contact.json        // /lien-he
    vi/auth.json           // /dang-nhap
    vi/archive.json        // /tu-lieu
    vi/meta.json           // SEO titles + descriptions
    en/... (mirror)
```
Namespace tách theo trang để lazy dễ và giảm risk khi chỉnh.

### 3. Khởi tạo
- `src/i18n/index.ts`: init với `resources` (import trực tiếp — bundle nhẹ, không cần backend HTTP), `fallbackLng: 'vi'`, `detection` từ `localStorage` → `navigator`.
- Import `./i18n` một lần trong `src/router.tsx` (chạy trước render, an toàn SSR nếu resource inline).

### 4. Language Switcher
- Component `src/components/language-switcher.tsx`: nút toggle `VI / EN` nhỏ gọn, đặt trong `TopNav` cạnh nút Đăng nhập; lưu chọn vào `localStorage` (`i18nextLng`).
- Cập nhật `<html lang>` động qua `useEffect` khi đổi ngôn ngữ.

### 5. Refactor các trang
Từng route dùng `useTranslation('<namespace>')` và thay literal Việt bằng `t('key')`:
- `__root.tsx` (nav, footer, error/notfound, meta root)
- `index.tsx` (hero, MinhLyTeam block giữ nguyên câu chữ nội bộ nhưng vẫn dịch labels ngoài block), projects grid, principles, tools
- `am-nhac.tsx`, `tu-lieu.tsx`, `du-an.tsx`, `du-an.$slug.tsx`, `ghi-chu.tsx`, `gioi-thieu.tsx`, `lien-he.tsx`, `dang-nhap.tsx`
- Content data (`src/content/*.ts`): thêm trường `titleKey/descKey` hoặc tách sang JSON translation, để `t()` render ra đúng ngôn ngữ.

### 6. SEO metadata
- `head()` mỗi route đọc từ `i18n.t('meta:home.title', { lng: currentLng })` — dùng instance `i18n` trực tiếp (không cần hook trong head factory).
- Giữ `og:title` / `og:description` đồng bộ theo ngôn ngữ hiện tại.

### 7. Nội dung cần giữ nguyên (không dịch)
- Khối **MinhLyTeam · Studio Minh Hieu** (theo yêu cầu tuyệt đối không đụng).
- Tên riêng: Minh Hieu Studio, Quantum Inspector, Dowsample, FileOS, Sample FL, MH.
- Tên bản nhạc Việt.

### 8. QA
- Build check, thử toggle VI ↔ EN trên các route chính, verify `<html lang>` đổi, verify localStorage persist qua reload.

### Technical notes
- Không cần SSR-aware backend — inline resources trong bundle (dưới ~30KB gzip cho 2 ngôn ngữ).
- Không dùng Suspense fallback cho i18n để tránh flash — resources đã sẵn sàng đồng bộ.
- English copy sẽ do em viết bản đầu tiên theo tinh thần Basedash editorial (ngắn, chuẩn, không marketing sáo); anh review chỉnh sau.
