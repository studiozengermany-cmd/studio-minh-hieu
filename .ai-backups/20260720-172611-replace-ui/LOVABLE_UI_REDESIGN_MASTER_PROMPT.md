# CHỈ DẪN THỐNG NHẤT CUỐI CÙNG — THIẾT KẾ LẠI MINH HIEU STUDIO

```text
Đây là chỉ dẫn thống nhất cuối cùng và thay thế toàn bộ prompt, câu sửa, ghi chú hoặc yêu cầu rời rạc trước đây. Nếu có nội dung cũ mâu thuẫn với văn bản này, hãy bỏ qua nội dung cũ và chỉ làm theo văn bản này. Không tiếp tục sửa chắp vá theo từng tin nhắn cũ.

## 1. Nhiệm vụ

Hãy thiết kế lại trực tiếp giao diện của website MINH HIEU STUDIO đang mở trong dự án Lovable hiện tại.

Mục tiêu là nâng cấp thiết kế cũ thành một website cá nhân về âm nhạc có chiều sâu, sang trọng, rõ thứ bậc và có cá tính riêng. Giữ nền tảng, nội dung và chức năng đang hoạt động; không phá bỏ rồi dựng một website khác.

Dự án hiện tại đã chạy được bằng Astro và đã có bản xem trước. Lần xử lý trước chỉ sửa lỗi lệnh dựng dự án, chưa phải là thiết kế lại. Lần này phải tạo ra thay đổi thị giác thực sự trong CSS và các thành phần giao diện. Không được chỉ sửa cấu hình, đổi vài khoảng cách hoặc báo cáo rằng thiết kế đã hoàn tất khi hình ảnh gần như vẫn giữ nguyên.

Không xuất bản website. Chỉ sửa trong dự án và mở bản xem trước để tôi kiểm tra.

## 2. Điều bắt buộc phải hiểu đúng về tác giả và MinhLyTeam

- Toàn bộ website và dự án này do một mình Minh Hiếu thực hiện.
- Không có người đồng sáng tạo, người cộng tác hoặc đối tác cùng làm dự án này.
- `MinhLyTeam` là dấu ghi nhận mối liên hệ của Minh Hiếu với team và sự tôn trọng dành cho team cùng người sư phụ của mình. Nó không phải thông tin về quyền tác giả hay người cùng thực hiện website.
- Xóa cụm chữ `Collab spec` ở mọi nơi. Không thay nó bằng `collaboration`, `partner`, `co-created`, `team project`, “hợp tác”, “đồng sáng tạo”, “cùng thực hiện” hoặc bất kỳ cách diễn đạt nào mang ý nghĩa có người khác cùng làm dự án.
- Không đặt `MinhLyTeam` trong Hero, thanh điều hướng hoặc chân trang.

### THÀNH PHẦN BỊ KHÓA TUYỆT ĐỐI

Giữ nguyên thẻ lớn đã được duyệt, nằm sau phần SampleGuard và trước phần Ghi chú. Thẻ này có:

- Dòng chính: `STUDIO MINH HIEU`
- Dòng nhỏ ngay bên dưới: `MINHLYTEAM`

Phải giữ nguyên vị trí, kích thước, tỷ lệ, nội dung, thứ bậc chữ, khoảng cách, cách căn, đường viền và hiệu ứng sáng hiện có của chính thẻ này.

Không được:

- Xóa, đổi tên hoặc viết lại hai dòng chữ.
- Di chuyển thẻ xuống chân trang hoặc sang khu vực khác.
- Tách `MINHLYTEAM` ra khỏi thẻ.
- Thiết kế lại thẻ theo hệ thống mới.
- Thêm nhãn `Collab spec` phía trên thẻ.
- Mô tả thẻ này như dấu hiệu cộng tác, đồng tác giả hoặc người cùng thực hiện dự án.

Đây là ngoại lệ duy nhất: mọi khu vực khác có thể được nâng cấp theo chỉ dẫn bên dưới, nhưng thẻ này phải được bảo toàn như ảnh đã duyệt.

## 3. Hướng thiết kế tổng thể

Giữ tinh thần thiết kế hiện tại nhưng nâng cấp rõ rệt. Tông chủ đạo là:

- Đen sâu.
- Trắng sáng sang trọng.
- Xám nhẹ và bạc lạnh làm màu phụ.
- Ánh trắng có độ phát sáng rất nhẹ tại điểm quan trọng.

Không dùng màu tím, hồng, cam hoặc dải cầu vồng làm chủ đạo. Không tạo cảm giác hội chợ, sàn nhảy, trò chơi, bảng điều khiển công nghệ hoặc mẫu website AI đại trà. Nếu tài sản thật đã có một ít màu, hãy để màu đó thuộc về ảnh/video; không nhân nó thành viền màu trên toàn trang.

Tham khảo video giao diện đã cung cấp chỉ để học cách tạo chiều sâu và phân lớp: nền nằm thấp nhất, khung nội dung nổi phía trên, tab đang chọn nhô lên như một bậc nhỏ, phần phụ nằm thấp hơn phần chính. Không sao chép màu sắc, chữ, nội dung hoặc bố cục nguyên bản của website trong video tham khảo.

## 4. Nguyên tắc chiều sâu và thứ bậc

Toàn trang phải có bốn lớp nhìn thấy rõ:

1. Nền chuyển động ở lớp sâu nhất.
2. Khung riêng của từng khu vực nằm phía trên nền.
3. Thẻ, tab hoặc nội dung chính được nâng nổi.
4. Nội dung phụ được đặt thấp hơn hoặc lõm nhẹ vào trong thẻ chính.

Phải tạo cảm giác “lồi – lõm” tinh tế bằng:

- Khác biệt độ sáng giữa nền, khung và thẻ.
- Viền mảnh 1 px, ưu tiên viền sáng nhẹ ở cạnh trên.
- Bóng đổ mềm xuống dưới.
- Bóng trong rất nhẹ để tạo mặt kính có chiều sâu.
- Khoảng cách đủ rộng giữa các lớp.
- Hiệu ứng nâng 2–4 px khi rê chuột trên thành phần tương tác quan trọng.

Không dùng viền dày, viền đen nặng hoặc khung giả 3D thô. Không phủ hiệu ứng kính lên mọi thứ. Mỗi khu vực phải có một điểm chính nổi bật và các phần phụ nằm dưới; không để toàn bộ nội dung dính thành một mặt phẳng.

### Thanh điều hướng và tab

- Thanh điều hướng là một khối riêng nằm trên nền, không hòa lẫn vào nền.
- Tab đang được chọn phải sáng hơn, nhô cao hơn và giống một bậc nhỏ đặt trên thanh điều hướng.
- Tab chưa chọn nằm thấp hơn và yên hơn.
- Trạng thái rê chuột và bàn phím phải rõ nhưng kín đáo.
- Trên điện thoại, menu phải mở đúng toàn màn hình, khóa cuộn trang và không bị cắt.

## 5. Chữ và nhận diện

- Giữ nguyên nội dung chữ đã có, nhưng thiết kế lại cách trình bày chữ để có cá tính riêng.
- Không dùng kiểu tiêu đề đại trà giống mẫu website dựng sẵn.
- Wordmark `MINH HIEU STUDIO` phải được xử lý như một dấu hiệu nhận diện: tỷ lệ chữ, độ đậm, độ rộng, khoảng cách ký tự và xuống dòng phải có chủ ý.
- Không tự ý thêm font bên ngoài hoặc thêm thư viện. Tận dụng font hiện có và tạo nét riêng bằng cách dàn chữ.
- Chữ nội dung phải dễ đọc; không dùng chữ nghiêng trang trí cho cả đoạn văn.
- Tiêu đề chính phải nổi rõ hơn nhãn phụ, và nhãn phụ phải nằm đúng tầng thấp hơn.

## 6. Nền chuyển động có chiều sâu

Giữ video mưa hiện có làm tài sản nền chính. Nâng nó thành một nền chuyển động có cảm giác 3D và có nhiều lớp, không thay bằng video ngẫu nhiên và không tải thêm video bên ngoài.

Có thể tạo chiều sâu bằng các lớp xa – giữa – gần, lớp tối định hướng, độ mờ khác nhau, giọt nước kính, phản xạ hoặc chuyển động thị sai rất nhẹ. Nội dung phải luôn dễ đọc trên nền.

Chuyển động phải chậm, sang trọng và tiết chế. Trên điện thoại hoặc khi người dùng chọn giảm chuyển động, dùng phiên bản đơn giản, ổn định và nhẹ hơn. Không để hiệu ứng làm nóng máy, giật trang hoặc che nội dung.

Không lặp lại một lớp mưa mạnh giống nhau phía sau mọi khu vực. Mỗi khu vực cần nền phụ hoặc độ tối riêng để được phân biệt, trong khi toàn trang vẫn thống nhất.

## 7. Yêu cầu cho từng khu vực

Giữ nguyên thứ tự sáu khu vực trên cả tiếng Việt và tiếng Anh:

1. Hero / Trang chủ
2. Âm nhạc / Music
3. Tư liệu biểu diễn / Performance archive
4. Dự án đang làm / Current projects
5. Ghi chú thực tế / Practical notes
6. Liên hệ / Contact

### Hero

- Giữ bố cục chính của Hero hiện tại với `MINH HIEU STUDIO` nằm bên trái; không căn giữa theo video tham khảo.
- Giữ nguyên câu giới thiệu và hai nút hành động hiện có.
- Xóa `Collab spec` và không đặt `MinhLyTeam` trong Hero.
- Tiêu đề phải là điểm nổi bật nhất, có cách dàn chữ riêng và chiều sâu nhẹ.
- Video mưa là nền sâu; nội dung Hero là lớp nổi rõ ở phía trước.
- Hai nút phải phân biệt rõ nút chính và nút phụ.

### Âm nhạc

- Thẻ bài nhạc và trình phát là thành phần chính được nâng nổi.
- Ảnh bìa, thông tin, mô tả và chi tiết quy trình là các lớp phụ thấp hơn hoặc nằm trong khung lõm.
- Giữ nguyên bài nhạc thật, ảnh thật, phần nghe thử, mô tả và thông tin đang có.
- Điều khiển nghe nhạc phải rõ ràng và dùng được bằng bàn phím.

### Tư liệu biểu diễn

- Tạo một khung thư viện riêng biệt; các ảnh thật là các thẻ con nằm bên trong.
- Ảnh phải mạnh hơn hiệu ứng trang trí.
- Giữ đủ ảnh, chú thích và nội dung thật; không thêm ảnh giả.
- Không cắt mất khuôn mặt, thiết bị biểu diễn hoặc thông tin quan trọng.

### Dự án đang làm / SampleGuard

- SampleGuard là khung chính được nâng nổi, giống một sản phẩm thật trong phòng thí nghiệm sáng tạo, không giống trang bán phần mềm.
- Ba tính năng là ba khối phụ thấp hơn, nằm rõ bên trong hệ thống của SampleGuard.
- Giữ nguyên trạng thái, nội dung, hình chụp và thông tin thật.
- Ngay sau SampleGuard phải giữ nguyên tuyệt đối thẻ `STUDIO MINH HIEU / MINHLYTEAM` đã khóa ở mục 2.

### Ghi chú thực tế

- Tiêu đề hoặc thanh tóm tắt của từng ghi chú là phần nhô lên để người dùng nhận biết nơi có thể bấm.
- Nội dung mở rộng nằm thấp hơn hoặc lõm vào phía dưới.
- Giữ nguyên ba ghi chú và toàn bộ nội dung.
- Ưu tiên đọc dễ; hiệu ứng chỉ hỗ trợ phân cấp.

### Liên hệ

- Hành động gửi email là thành phần chính được nâng nổi.
- Thông tin giải thích và chân trang nằm ở tầng thấp hơn.
- Giữ nguyên địa chỉ email và nội dung hiện có.
- Liên kết email phải hoạt động trực tiếp, không phụ thuộc JavaScript.

## 8. Phạm vi kỹ thuật

Làm trực tiếp trong mã nguồn Astro hiện tại. Giữ nguyên:

- Astro 7 và cấu trúc thành phần hiện có.
- Hai đường dẫn `/` và `/en/`.
- `src/i18n.ts` làm nguồn nội dung song ngữ.
- Sáu khu vực và thứ tự hiện tại.
- Toàn bộ ảnh, video, âm thanh, chú thích, dữ kiện, SEO và chức năng đang hoạt động.
- Cấu hình dựng dự án hiện tại, bao gồm lệnh `build:dev` đã được dùng thành công trong Lovable.

Ưu tiên chỉ sửa những tệp giao diện cần thiết:

- `src/styles/global.css`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/Music.astro`
- `src/components/sections/Archive.astro`
- `src/components/sections/Projects.astro`
- `src/components/sections/Notes.astro`
- `src/components/sections/Contact.astro`
- `src/layouts/Layout.astro` nếu thật sự cần cho các lớp nền
- `src/i18n.ts` chỉ để xóa `Collab spec` hoặc câu chữ sai ý nghĩa về cộng tác

Không được:

- Chuyển sang React, TanStack, Vite, Next.js hoặc khởi tạo dự án thay thế.
- Sửa `package.json`, đổi lệnh dựng dự án hoặc thêm thư viện mới.
- Thêm trang, tính năng, đăng nhập, cơ sở dữ liệu, dịch vụ đám mây, cửa hàng, blog, bảng quản trị hoặc nội dung giả.
- Xóa, đổi tên hoặc thay thế tài sản thật.
- Tự thay đổi nội dung, tên gọi, dữ kiện hoặc cấu trúc thông tin ngoài phần `Collab spec` đã được chỉ định.
- Xuất bản website, kết nối tên miền hoặc đẩy thay đổi ra ngoài.

Nếu cần thay đổi ngoài phạm vi trên, thiếu tài sản, phải xóa/đổi tên tệp, phải thêm thư viện hoặc có nguy cơ đụng vào thẻ bị khóa, hãy dừng lại và hỏi tôi trước. Không tự quyết định.

## 9. Cách thực hiện

1. Đọc `AGENTS.md` và kiểm tra giao diện hiện tại trước khi sửa.
2. Xác định rõ các lớp nền, khung khu vực, thành phần chính và thành phần phụ.
3. Sửa hệ thống màu, chiều sâu và chữ trước.
4. Làm lần lượt: thanh điều hướng → Hero → Âm nhạc → Tư liệu → SampleGuard → Ghi chú → Liên hệ.
5. Khi đến thẻ `STUDIO MINH HIEU / MINHLYTEAM`, bỏ qua mọi thay đổi và xác nhận nó vẫn nguyên vẹn.
6. Kiểm tra trực tiếp bản xem trước ở máy tính và điện thoại.
7. Chỉ báo hoàn tất khi giao diện thực sự khác biệt và đạt các tiêu chí bên dưới.

Không quay lại xin lựa chọn về framework vì dự án Astro hiện tại đã chạy thành công. Không chỉ sửa lỗi dựng dự án rồi dừng. Không tiếp tục dựa trên các câu lệnh sửa rời trước đây.

## 10. Tiêu chí hoàn thành

Chỉ được coi là hoàn thành khi:

- Giao diện không còn phẳng; nhìn rõ nền, khung, thẻ chính và nội dung phụ.
- Tab đang chọn nhô lên như một bậc nhỏ và khác rõ với tab chưa chọn.
- Tông đen – trắng – xám nhẹ, ánh trắng sang trọng là chủ đạo; không có cảm giác hội chợ.
- Hero vẫn căn trái, có wordmark riêng và nền mưa chuyển động có chiều sâu.
- Mỗi khu vực có ranh giới và điểm chính rõ ràng.
- Thẻ `STUDIO MINH HIEU / MINHLYTEAM` giữ nguyên đúng vị trí và hình thức đã duyệt.
- Không còn `Collab spec` hoặc câu chữ khiến người xem hiểu rằng dự án có người đồng sáng tạo.
- Cả `/` và `/en/` đều có đủ sáu khu vực và hoạt động bình thường.
- Ảnh, video, âm thanh, trình phát và menu điện thoại vẫn hoạt động.
- Không tràn ngang hoặc cắt nội dung ở 375 px và ở màn hình máy tính 1280–1440 px.
- Trạng thái bàn phím, giảm chuyển động và độ tương phản vẫn sử dụng được.
- Chạy thành công `npm run build:dev` và `npm run build` bằng các lệnh hiện có; không sửa thêm cấu hình để ép qua kiểm tra.

Trước khi báo cáo hoàn tất, hãy mở bản xem trước và cho thấy ít nhất các khu vực: Hero, thanh điều hướng có tab đang chọn, Âm nhạc, SampleGuard cùng thẻ bị khóa, và giao diện điện thoại.

## 11. Báo cáo cuối cùng

Viết báo cáo bằng tiếng Việt, ngắn gọn và dễ hiểu, gồm đúng bốn phần:

1. Những khu vực đã thật sự thiết kế lại.
2. Danh sách tệp đã sửa và lý do.
3. Kết quả kiểm tra trên máy tính, điện thoại, `/`, `/en/`, `npm run build:dev` và `npm run build`.
4. Tiêu chí nào chưa đạt hoặc vấn đề nào cần tôi quyết định.

Không báo “đã thiết kế lại” nếu chỉ sửa cấu hình hoặc chưa tạo ra thay đổi thị giác rõ ràng. Không xuất bản website.
```

🎯 Target: Lovable Agent mode — chỉnh trực tiếp dự án Astro hiện tại.

💡 Bản này thay thế toàn bộ prompt và các câu sửa rời trước đó; gửi một lần nguyên văn để Lovable làm theo thống nhất.
