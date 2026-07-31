const publicSiteProjectOverrides = {
  vi: {
    projectsPage: {
      subtitle:
        "Bốn công cụ được phát triển từ những nhu cầu thực tế trong sản xuất âm nhạc, quản lý dữ liệu và workflow hỗ trợ bởi AI. Mỗi dự án được trình bày theo giá trị sử dụng, khả năng hiện tại và hướng phát triển.",
      problemLabel: "Nhu cầu đang giải quyết",
      capabilitiesLabel: "Khả năng nổi bật",
      evidenceLabel: "Nền tảng hiện có",
      limitsLabel: "Hướng phát triển",
      detailPage: {
        dontsLabel: "Nguyên tắc sử dụng",
        notReadyLabel: "Hướng phát triển",
        evidenceLabel: "Nền tảng hiện có",
        sourceNote:
          "Thông tin trên trang phản ánh định hướng và trạng thái phát triển hiện tại của dự án.",
      },
    },
    projectsData: {
      "quantum-inspector": {
        description: [
          "MH Quantum Inspector hỗ trợ việc xác định chính xác phần tử giao diện cần phân tích, thay vì chỉ dựa vào ảnh chụp màn hình hoặc mô tả bằng lời.",
          "Công cụ thu thập ngữ cảnh DOM, class, thuộc tính và computed style cần thiết, sau đó chuẩn hóa thành nội dung gọn để sử dụng trong quá trình phân tích và hoàn thiện giao diện với AI.",
        ],
        evidence: [
          "Đã có luồng chọn phần tử và xuất ngữ cảnh kỹ thuật.",
          "Đang được sử dụng trong workflow phát triển giao diện của Studio Minh Hiếu.",
        ],
        notReady: [
          "Hoàn thiện trải nghiệm sử dụng và định dạng đầu ra.",
          "Chuẩn hóa quy trình đóng gói và cập nhật extension.",
        ],
        dos: [
          "Phân tích giao diện trong môi trường phát triển.",
          "Tạo ngữ cảnh rõ ràng cho phiên làm việc với AI.",
        ],
        donts: [
          "Chỉ sử dụng trong phạm vi dữ liệu và môi trường được phép truy cập.",
          "Kiểm tra lại kết quả trước khi áp dụng thay đổi lên sản phẩm.",
        ],
      },
      "dowsample-extension": {
        role: "Thu thập và quản lý audio",
        oneLine:
          "Chrome Extension kết hợp backend chạy local để tiếp nhận nhiều liên kết, tải audio về máy và quản lý kết quả theo từng job.",
        description: [
          "MH Dowsample Extension được xây dựng để giảm thao tác lặp lại khi thu thập sample và audio tham khảo từ nhiều liên kết.",
          "Extension gửi công việc đến backend chạy trên máy người dùng, tải file theo cơ chế an toàn bằng file tạm, giữ tên gốc khi phù hợp và tránh ghi đè dữ liệu đã có.",
          "Sản phẩm hướng tới một workflow rõ ràng: tiếp nhận liên kết, theo dõi tiến độ, phân loại kết quả và đưa file về thư mục local do người dùng kiểm soát.",
        ],
        features: [
          { name: "Xử lý nhiều liên kết", desc: "Tiếp nhận danh sách URL và tạo job xử lý tập trung thay vì thao tác từng file." },
          { name: "Backend local", desc: "Quá trình tải và quản lý file diễn ra trên máy người dùng." },
          { name: "Tải bằng file tạm", desc: "Sử dụng đuôi .part trong quá trình tải và chỉ hoàn tất tên file khi công việc kết thúc." },
          { name: "Không ghi đè", desc: "Tự tạo tên thay thế khi file đã tồn tại để bảo vệ dữ liệu cũ." },
          { name: "Theo dõi theo job", desc: "Hiển thị trạng thái, tiến độ và kết quả của từng lượt xử lý." },
          { name: "Phân loại thực dụng", desc: "Hỗ trợ tổ chức loop, one-shot và các nhóm audio theo workflow người dùng." },
        ],
        evidence: [
          "Luồng extension → backend local → thư mục tải đã hoạt động trên Windows.",
          "Đã có cơ chế file tạm, tránh ghi đè và theo dõi kết quả theo job.",
          "Đang được hoàn thiện dựa trên dữ liệu sử dụng thực tế.",
        ],
        notReady: [
          "Hoàn thiện bộ cài và trải nghiệm khởi động cho người dùng Windows.",
          "Mở rộng khả năng phân loại và báo cáo kết quả.",
          "Chuẩn hóa quy trình cập nhật extension và backend.",
        ],
        dos: [
          "Thu thập audio mà người dùng có quyền truy cập và sử dụng.",
          "Quản lý nhiều lượt tải trong một workflow local rõ ràng.",
        ],
        donts: [
          "Tôn trọng quyền truy cập, giấy phép và điều khoản của từng nguồn.",
          "Kiểm tra nội dung trước khi đưa vào thư viện sản xuất chính.",
        ],
      },
      fileos: {
        description: [
          "MH FileOS nghiên cứu cách tổ chức thư viện file lớn trên Windows theo hướng local-first, có kế hoạch rõ ràng và ưu tiên bảo vệ dữ liệu người dùng.",
          "Hệ thống tập trung vào việc lập chỉ mục, phân tích cấu trúc và chuẩn bị các bước tổ chức có thể kiểm chứng trước khi thực hiện thay đổi.",
        ],
        evidence: [
          "Đã có nền tảng scan read-only và catalog SQLite.",
          "Kiến trúc Rust được chia thành các lớp chức năng rõ ràng.",
        ],
        notReady: [
          "Phát triển giao diện desktop cho workflow thực tế.",
          "Hoàn thiện cơ chế phê duyệt kế hoạch và phục hồi thao tác.",
        ],
        dos: [
          "Phân tích và lập chỉ mục thư viện file local.",
          "Chuẩn bị kế hoạch tổ chức dữ liệu có thể kiểm chứng.",
        ],
        donts: [
          "Luôn duy trì bản sao lưu trước các thay đổi lớn.",
          "Chỉ thực hiện thao tác khi phạm vi và kết quả đã được xác nhận.",
        ],
      },
      "sample-fl": {
        description: [
          "MH Sample FL là ứng dụng desktop giúp producer tìm, nghe thử, ghi chú và ghi nhớ sample trong workflow sử dụng FL Studio.",
          "Ứng dụng xây dựng chỉ mục local, hỗ trợ tìm kiếm, waveform, metadata, tag và liên kết giữa sample với từng project mà không thay đổi file nguồn.",
          "Việc đưa sample sang FL Studio sử dụng cơ chế kéo file của Windows; sản phẩm đóng vai trò công cụ quản lý sample đồng hành cùng workflow sản xuất nhạc.",
        ],
        evidence: [
          "Đã có nền tảng tìm kiếm, SQLite, phân tích WAV và backup dữ liệu ứng dụng.",
          "Đã tạo được package Windows cho quá trình thử nghiệm nội bộ.",
        ],
        notReady: [
          "Hoàn thiện trải nghiệm preview, waveform và kéo thả trên Windows.",
          "Tối ưu hiệu năng cho thư viện sample quy mô lớn.",
          "Chuẩn hóa bộ cài dành cho người dùng cuối.",
        ],
        dos: [
          "Quản lý thư viện sample local trong workflow FL Studio.",
          "Ghi nhớ sample đã dùng, nguồn và ghi chú theo project.",
        ],
        donts: [
          "Duy trì backup định kỳ cho thư viện và dữ liệu ứng dụng.",
          "Xác nhận nguồn và quyền sử dụng sample trước khi phát hành sản phẩm âm nhạc.",
        ],
      },
    },
  },
  en: {
    projectsPage: {
      subtitle:
        "Four tools developed from real needs in music production, data management and AI-assisted workflows. Each project is presented through its use value, current capability and product direction.",
      problemLabel: "Need being addressed",
      capabilitiesLabel: "Key capabilities",
      evidenceLabel: "Current foundation",
      limitsLabel: "Product direction",
      detailPage: {
        dontsLabel: "Usage principles",
        notReadyLabel: "Product direction",
        evidenceLabel: "Current foundation",
        sourceNote:
          "The information on this page reflects the project's current direction and development stage.",
      },
    },
    projectsData: {
      "quantum-inspector": {
        description: [
          "MH Quantum Inspector helps identify the exact interface element that needs analysis instead of relying only on screenshots or verbal descriptions.",
          "It captures the relevant DOM context, classes, attributes and computed styles, then formats them into concise input for AI-assisted interface work.",
        ],
        evidence: [
          "Element selection and technical-context export are working.",
          "Used inside Studio Minh Hieu's interface-development workflow.",
        ],
        notReady: [
          "Refine the user experience and output format.",
          "Standardise extension packaging and updates.",
        ],
        dos: [
          "Analyse interfaces in a development environment.",
          "Create clear context for AI-assisted work sessions.",
        ],
        donts: [
          "Use only within data and environments you are authorised to access.",
          "Review results before applying changes to a product.",
        ],
      },
      "dowsample-extension": {
        role: "Audio collection and management",
        oneLine:
          "A Chrome extension with a local backend for receiving multiple links, downloading audio and managing results by job.",
        description: [
          "MH Dowsample Extension reduces repeated work when collecting samples and reference audio from multiple links.",
          "The extension sends jobs to a backend running on the user's machine, downloads through temporary files, preserves source names where appropriate and avoids overwriting existing data.",
          "The product is designed around a clear workflow: receive links, track progress, classify results and place files in a user-controlled local folder.",
        ],
        features: [
          { name: "Multiple-link processing", desc: "Receives URL lists and creates a central job instead of requiring one-file-at-a-time work." },
          { name: "Local backend", desc: "Downloading and file management run on the user's machine." },
          { name: "Temporary-file downloads", desc: "Uses .part files during transfer and finalises names only after completion." },
          { name: "No overwrite", desc: "Creates an alternative name when a file already exists." },
          { name: "Job tracking", desc: "Shows status, progress and results for each processing run." },
          { name: "Practical classification", desc: "Supports organising loops, one-shots and other audio groups around the user's workflow." },
        ],
        evidence: [
          "The extension → local backend → download-folder flow is working on Windows.",
          "Temporary files, overwrite protection and job-level tracking are in place.",
          "Development is informed by real workflow data.",
        ],
        notReady: [
          "Refine installation and startup for Windows users.",
          "Expand classification and result reporting.",
          "Standardise extension and backend updates.",
        ],
        dos: [
          "Collect audio the user is authorised to access and use.",
          "Manage multiple downloads inside a clear local workflow.",
        ],
        donts: [
          "Respect access rights, licences and the terms of each source.",
          "Review content before placing it in the main production library.",
        ],
      },
      fileos: {
        description: [
          "MH FileOS explores how large Windows file libraries can be organised through a local-first approach with clear plans and strong data protection.",
          "The system focuses on indexing, structural analysis and verifiable organisation steps before changes are applied.",
        ],
        evidence: [
          "A read-only scanning foundation and SQLite catalogue are in place.",
          "The Rust architecture is separated into clear functional layers.",
        ],
        notReady: [
          "Develop the desktop interface for real workflows.",
          "Complete approval and recovery flows for planned actions.",
        ],
        dos: [
          "Analyse and index local file libraries.",
          "Prepare verifiable data-organisation plans.",
        ],
        donts: [
          "Maintain a backup before major changes.",
          "Apply actions only after scope and expected results are confirmed.",
        ],
      },
      "sample-fl": {
        description: [
          "MH Sample FL is a desktop application for finding, auditioning, annotating and remembering samples inside an FL Studio-centred workflow.",
          "It builds a local index and supports search, waveforms, metadata, tags and project-to-sample relationships without modifying source files.",
          "Samples are sent to FL Studio through Windows native file drag; the product acts as a sample-management companion to the music-production workflow.",
        ],
        evidence: [
          "Search, SQLite, WAV analysis and application-data backup foundations are in place.",
          "A Windows package has been produced for internal testing.",
        ],
        notReady: [
          "Refine preview, waveform and drag-and-drop behaviour on Windows.",
          "Optimise performance for large sample libraries.",
          "Standardise the end-user installer.",
        ],
        dos: [
          "Manage a local sample library alongside FL Studio.",
          "Remember used samples, sources and notes by project.",
        ],
        donts: [
          "Maintain regular backups of the library and application data.",
          "Confirm sample sources and usage rights before releasing music.",
        ],
      },
    },
  },
} as const;

export default publicSiteProjectOverrides;
