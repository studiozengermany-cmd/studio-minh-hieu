export interface Principle {
  n: string;
  title: string;
  body: string;
}

export const principles: Principle[] = [
  { n: "01", title: "Nhu cầu thật trước", body: "Dự án phải bắt đầu từ một vấn đề đang tồn tại trong công việc." },
  { n: "02", title: "Người dùng quyết định", body: "AI hỗ trợ thực hiện, không tự quyết định mục tiêu sản phẩm." },
  { n: "03", title: "Local-first khi phù hợp", body: "Ưu tiên dữ liệu ở máy người dùng và quyền kiểm soát rõ ràng." },
  { n: "04", title: "Không phá dữ liệu", body: "Thao tác rủi ro phải có cảnh báo, xem trước và khả năng kiểm chứng." },
  { n: "05", title: "Không phóng đại", body: "Không gọi bản build, mockup hoặc demo là sản phẩm hoàn thiện." },
  { n: "06", title: "Bằng chứng trước tuyên bố", body: "Trạng thái phải dựa trên source, test, log, ảnh hoặc video thật." },
  { n: "07", title: "Cá nhân trước, cộng đồng sau", body: "Làm cho nhu cầu cá nhân trước; chỉ chia sẻ khi đủ ổn định." },
  { n: "08", title: "README phải có ích", body: "Nói rõ đây là gì, dùng thế nào, giới hạn ở đâu và bắt đầu từ đâu." },
];

export const statusConvention = [
  { status: "Ý tưởng", when: "Chưa có source hoặc hành vi chạy được." },
  { status: "Thử nghiệm", when: "Có source hoặc demo nhưng chưa có kiểm chứng đầy đủ." },
  { status: "Alpha", when: "Có workflow chính nhưng còn lỗi và gate chưa nghiệm thu." },
  { status: "Beta", when: "Đã có người dùng thử thực tế và quy trình phản hồi." },
  { status: "Stable", when: "Có tiêu chí phát hành, test và hỗ trợ rõ ràng." },
];

export const tools = [
  "FL Studio",
  "Ableton Live",
  "GitHub",
  "Cursor",
  "Cloudflare",
  "Figma",
  "VS Code",
  "Notion",
];
