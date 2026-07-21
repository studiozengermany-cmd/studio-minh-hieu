# MINH HIEU STUDIO — Brand Design System

> Void floats sound.

MINH HIEU STUDIO vận hành như một dark-stage: nền đen tuyệt đối, một accent duy nhất màu lavender-violet, điểm nhấn amber ấm. Hierarchy đến từ scale — không phải weight. Components về hình thức tối giản nhất. Không viền card. Không shadow. Void chính là thiết kế.

---

## Brand Identity

| | |
|---|---|
| **Loại studio** | Studio cá nhân âm nhạc + toolchain nội bộ |
| **Địa điểm** | Sài Gòn |
| **Domain** | studiominhhieu.com |
| **Người vận hành** | 1 người |
| **Giọng thương hiệu** | Trung thực. Cụ thể. Không quảng cáo. |

---

## Color Tokens

| Tên | Hex | CSS Variable | Vai trò |
|-----|-----|--------------|--------|
| Void | `#000000` | `--color-void` | Canvas trang — đen tuyệt đối, không dùng dark gray thay thế |
| Ghost White | `#f4f4f0` | `--color-ghost-white` | Headline, text chính — warm white giữ hierarchy tối đa |
| Ash Gray | `#9a9a9a` | `--color-ash-gray` | Body copy, secondary label — lùi sau mà không mất |
| Steel Gray | `#636363` | `--color-steel-gray` | Caption, tertiary — mức đọc được yên tĩnh nhất |
| Lavender Pulse | `#9d6fff` | `--color-lavender-pulse` | Accent chính — button, brand mark, active state |
| Signal Gold | `#f0b429` | `--color-signal-gold` | Nhấn mạnh — amber ấm tạo ra tension thương hiệu với violet |
| Deep Indigo | `#1a0a3d` | `--color-deep-indigo` | Surface tint — logo gradient depth, subtle accent wash |

### Quy tắc màu

- **Phải** dùng `#000000` cho mọi background section — không dùng dark gray panel.
- **Phải** giữ `--color-lavender-pulse` độc quyền cho interactive elements (button, link, focus) và brand mark.
- **Phải** dùng `--color-signal-gold` chỉ cho inline emphasis text và attention punctuation — không làm background.
- **Không được** dùng card surface có viền và fill màu — elements float trên void bằng whitespace.

---

## Typography

### Typeface

**Display:** Font display của studio (defined trong tailwind `font-display`)
**Body:** Inter / System sans-serif fallback

Nguyên tắc một typeface: hierarchy đến từ scale và tracking — không phải từ việc switch giữa serif và sans-serif.

### Type Scale

| Vai trò | Size | Weight | Line Height | Tracking | Token |
|---------|------|--------|-------------|---------|-------|
| Display | 96–120px | 400 | 0.92 | −0.04em | `--text-display` |
| Heading LG | 72–80px | 400 | 0.95 | −0.035em | `--text-heading-lg` |
| Heading | 48–56px | 400 | 1.0 | −0.025em | `--text-heading` |
| Subheading | 32–40px | 400 | 1.05 | −0.015em | `--text-subheading` |
| Body LG | 18px | 300 | 1.6 | 0 | `--text-body-lg` |
| Body | 15–16px | 400 | 1.55 | 0 | `--text-body` |
| Label | 12–13px | 600 | 1.2 | 0.02em uppercase | `--text-label` |
| Caption | 11–12px | 400 | 1.4 | 0 | `--text-caption` |

### Quy tắc typography

- **Phải** dùng scale (kích thước) làm tín hiệu hierarchy chính — không phải font weight.
- **Phải** áp negative tracking (−0.03em đến −0.04em) cho mọi display size ≥42px.
- **Nên** dùng weight 300 (light) cho body 18px+ — đọc thoáng, không aggressive.
- **Không được** bold body text — tối đa weight 400.
- Headline 80–120px tạo editorial scale. Tin vào nó.

---

## Spacing

**Base unit:** 6px

| Token | Value | Dùng cho |
|-------|-------|----------|
| `--space-1` | 6px | Micro-gap inline |
| `--space-2` | 12px | Gap compact |
| `--space-3` | 18px | Padding nhỏ bên trong |
| `--space-4` | 24px | Component padding |
| `--space-5` | 36px | Section sub-gap |
| `--space-6` | 60px | Section separator |
| `--space-7` | 96px | Major section gap |
| `--space-8` | 120px | Page-level breathing room |

---

## Surfaces & Elevation

**Không có elevation system.** Không shadow. Không card với viền và fill. Elements float trên void bằng whitespace.

| Level | Mục đích | Value |
|-------|---------|-------|
| Void Canvas | Tất cả background | `#000000` |
| Subtle Raised | Active state wash | `rgba(157,111,255,0.05)` |
| Brand Accent | Button, interactive | `#9d6fff` |

**Prohibited:** `box-shadow` trên content card, multiple nested background fill.

---

## Components

### Primary Action Button

Filled lavender pill — CTA duy nhất trên mỗi viewport.

- Background: `--color-lavender-pulse` (#9d6fff)
- Text: white, 14px, weight 600, uppercase, letter-spacing 0.025em
- Border-radius: 9999px (full pill)
- Padding: 14px vertical × 24px horizontal
- Hover: brighten, scale(1.01)
- **Quy tắc:** Chỉ một filled lavender button trên mỗi viewport nhìn thấy được.

### Ghost Link Button

Không background, không viền.

- Color: `--color-ghost-white` hoặc `--color-ash-gray`
- Font: 14–15px, weight 400
- Hover: color → ghost-white
- Underline khi hover cho inline link

### Section Headline Block

Hai cột bất đối xứng (desktop): oversized headline trái, body phải. Mobile: stacked.

- Headline: 48–80px, weight 400, −0.03em tracking, ghost-white
- Label trên headline: 12px, uppercase, signal-gold, weight 600
- Body: 18px, weight 300, ash-gray, max-width 520px
- Không container, không viền — typographic composition thuần trên void

### Navigation Bar

Transparent. Nằm trực tiếp trên black canvas.

- Logo: left-aligned, MH mark + "MINH HIEU" wordmark lavender-pulse
- Nav links: 12–13px, weight 600, uppercase, ash-gray → ghost-white hover
- CTA: lavender pill "Nghe thử" bên phải
- Không background, không blur, không viền

### Ecosystem Pipeline

Năm bước kết nối — không phải card grid.

- Bước hiển thị như inline text node nối bằng `→`
- Active: lavender text
- Inactive: ash-gray
- Không box xung quanh từng bước

---

## Border Radius

| Element | Value |
|---------|-------|
| Buttons | 9999px (pill) |
| Tags / badges | 9999px (pill) |
| Content block | 12–16px |
| Ảnh | 16–24px |

---

## Content & Voice

### Nguyên tắc giọng thương hiệu

1. **Trung thực hơn quảng cáo.** Nói cái đang có, không nói cái đang mơ.
2. **Cụ thể hơn chung chung.** "10 automated tests trên Windows CI" tốt hơn "đã kiểm thử đầy đủ".
3. **Ngắn → dừng → mở rộng.** Editorial rhythm. Một câu sắc, rồi mới context.
4. **Scale tạo authority.** Headline 96px không cần dấu chấm than.
5. **Tiếng Việt đặt trước.** Đây là studio Sài Gòn. Viết tiếng Việt tự tin.

### Writing Patterns

| Ngữ cảnh | Pattern | Ví dụ |
|----------|---------|-------|
| Hero headline | [Thứ anh làm]. [Thứ anh là]. | "Âm nhạc. Công cụ. Sài Gòn." |
| Eyebrow label | Noun phrase, uppercase | "HỆ SINH THÁI MH" |
| Body intro | Câu khẳng định ngắn. Rồi mới context. | "Một studio cá nhân. Không thương mại, không phóng đại." |
| Project oneliner | Động từ + kết quả | "Tải audio về local không ghi đè." |
| CTA | Action verb + object | "Nghe bản mới nhất" |

### Anti-patterns

- ❌ `"Chào mừng đến với..."` — passive, generic
- ❌ `"Chúng tôi cam kết..."` — ngụ ý đội ngũ, ngụ ý thương mại
- ❌ `"Giải pháp toàn diện cho..."` — marketing speak
- ❌ Dấu chấm than trong headline
- ❌ `"Đăng ký ngay để..."` — growth-hacking tone
- ❌ Emoji trong heading

---

## Layout

- **Page max-width:** 1200–1280px, căn giữa
- **Hero:** Full-bleed void canvas, headline căn giữa hoặc trái tại 80–100px
- **Section gaps:** 80–120px vertical
- **Content columns:** Hai cột bất đối xứng (headline 55% / body 40%) desktop, stacked mobile
- Không sidebar. Không mega-menu. Không card grid có viền.

---

## Do's and Don'ts

### Do

- Dùng `#000000` cho mọi section background — void là thiết kế chủ động
- Đặt headline weight 400 — scale tạo hierarchy, không phải độ đậm
- Giữ lavender-pulse độc quyền cho primary action duy nhất mỗi view
- Áp −0.03em tracking cho headline ≥40px
- Tin whitespace — một element mỗi visual zone, gaps rộng rãi
- Viết tiếng Việt editorial: ngắn, cụ thể, thật

### Don't

- Không dùng card surface với viền và background fill cho danh sách tính năng
- Không đặt nhiều filled lavender button trong cùng viewport
- Không gradient trên UI component (chỉ dùng trong brand mark)
- Không shadow/elevation
- Không dùng ngôn ngữ passive, promotional trong copy
- Không emoji hoặc dấu chấm than trong heading

---

## QA Checklist

- [ ] Tất cả section background là `#000000` thuần
- [ ] Không card border-shadow trong project/feature section
- [ ] Chỉ một filled lavender button trên mỗi viewport
- [ ] Mọi display headline có tracking −0.03em hoặc âm hơn
- [ ] Body text 18px là weight 300 (không phải 400)
- [ ] Signal-gold chỉ xuất hiện như inline emphasis text
- [ ] Mọi copy vượt qua test "người tự tin có nói điều này không?"
- [ ] Tiếng Việt đủ dấu, không emoji trong heading

---

*Tài liệu này được thiết lập theo triết lý: void floats sound.*  
*Ý tưởng và quyết định sản phẩm: Minh Hiếu. AI hỗ trợ thực hiện.*
