# MINH HIEU STUDIO

Website cá nhân và không gian lưu trữ dự án của Minh Hiếu.

Trang web được xây dựng trước hết để phục vụ nhu cầu cá nhân: giới thiệu âm nhạc, lưu lại quá trình làm việc, ghi chú kỹ thuật và các dự án đang thử nghiệm. Một số dự án có thể được chia sẻ cho cộng đồng khi đã đủ ổn định, nhưng website hiện không tuyên bố mọi nội dung là sản phẩm thương mại hoặc dịch vụ đã hoàn thiện.

- Website: https://studiominhhieu.com/
- Email liên hệ chính thức: support@studiominhhieu.com
- GitHub: https://github.com/studiozengermany-cmd

## Nội dung chính

- Thông tin và hoạt động âm nhạc của Minh Hiếu.
- Kho lưu trữ ghi chú, quy trình và thử nghiệm cá nhân.
- Giới thiệu các dự án phần mềm đang phát triển.
- Liên kết tới source code hoặc bằng chứng kỹ thuật khi có.

## Cách mô tả dự án trên website

Các dự án phải được mô tả đúng trạng thái thực tế:

- Dùng từ **ý tưởng**, **thử nghiệm**, **alpha** hoặc **đang phát triển** khi phù hợp.
- Không gọi một dự án là production-ready, thương mại hoặc hoàn thiện nếu chưa có bằng chứng.
- Không dùng mockup, placeholder hoặc dữ liệu giả để tạo cảm giác tính năng đã hoạt động.
- Build thành công không đồng nghĩa đã nghiệm thu đầy đủ trên máy người dùng.
- Các file `.exe`, installer hoặc artifact phải ghi rõ đó là build thử nghiệm nếu chưa phát hành chính thức.
- Ưu tiên tiếng Việt rõ ràng; tiếng Anh chỉ dùng khi cần thiết hoặc có bản dịch đi kèm.

Tên sản phẩm quản lý sample hiện tại là **MH Sample FL**. Không tiếp tục dùng tên cũ “SampleGuard FL” như tên sản phẩm chính thức.

## Công nghệ website

- HTML5
- CSS3
- JavaScript
- GSAP và ScrollTrigger cho một số hiệu ứng giao diện
- GitHub Pages và custom domain

## Chạy website ở máy local

```bash
git clone https://github.com/studiozengermany-cmd/studio-minh-hieu.git
cd studio-minh-hieu
python -m http.server 8000
```

Sau đó mở `http://localhost:8000` trong trình duyệt.

## Cấu trúc repository

```text
├── assets/
├── css/
├── js/
├── 404.html
├── index.html
├── CNAME
├── robots.txt
├── sitemap.xml
└── README.md
```

## Triển khai

Website được triển khai bằng GitHub Pages từ nhánh `main` và sử dụng tên miền `studiominhhieu.com`.

## Lưu ý

Repository này là phần website công khai của Minh Hiếu. Việc một dự án xuất hiện trên website không có nghĩa dự án đó đã được phát hành, có hỗ trợ thương mại hoặc phù hợp cho mọi người sử dụng.

## Liên hệ

Mọi liên hệ chính thức liên quan đến website và các dự án công khai sử dụng:

**support@studiominhhieu.com**
