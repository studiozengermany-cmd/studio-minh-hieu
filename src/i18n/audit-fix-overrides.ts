const auditFixOverrides = {
  vi: {
    signIn: {
      optionalText: "Đăng nhập là tuỳ chọn. Anh có thể tiếp tục xem website hoặc",
      backToHome: "quay lại trang chủ",
      switchSignup: "Chưa có tài khoản? Đăng ký",
      switchSignin: "Đã có tài khoản? Đăng nhập",
    },
    projectsData: {
      "quantum-inspector": {
        description: [
          "MH Quantum Inspector hỗ trợ xác định chính xác phần tử giao diện cần phân tích, thay vì chỉ dựa vào ảnh chụp màn hình hoặc mô tả bằng lời.",
          "Công cụ thu thập ngữ cảnh DOM, class, thuộc tính và computed style cần thiết, sau đó chuẩn hoá thành nội dung gọn để sử dụng trong quá trình phân tích và hoàn thiện giao diện với AI.",
          "Repository hiện được công khai để tham khảo và kiểm chứng quá trình phát triển. Dự án chưa qua security audit độc lập và chưa được khuyến nghị sử dụng trên profile trình duyệt chứa dữ liệu nhạy cảm.",
        ],
        features: [
          {
            name: "Chọn đúng phần tử",
            desc: "Khoanh trực tiếp vị trí cần phân tích thay vì mô tả bằng tọa độ hoặc lời nói mơ hồ.",
          },
          {
            name: "Thu thập DOM có ngữ cảnh",
            desc: "Lấy tag, path, class, thuộc tính truy cập và quan hệ cha–con cần thiết.",
          },
          {
            name: "Đọc computed style",
            desc: "Ghi nhận style thực tế sau khi CSS cascade đã được trình duyệt xử lý.",
          },
          {
            name: "Xuất nội dung cho AI",
            desc: "Chuẩn hoá dữ liệu thành đoạn text gọn để dùng trong ChatGPT, Claude hoặc công cụ hỗ trợ code.",
          },
          {
            name: "Luồng xử lý local",
            desc: "Không tải dữ liệu lên máy chủ của Studio. Khi bật MCP bridge, payload được chuyển qua dịch vụ local tại 127.0.0.1 và có thể được lưu tạm trên máy người dùng.",
          },
        ],
        evidence: [
          "Đã có luồng chọn phần tử và xuất ngữ cảnh kỹ thuật.",
          "Đang được sử dụng trong workflow phát triển giao diện của Studio Minh Hiếu.",
          "Repository công khai phản ánh mã nguồn và trạng thái phát triển hiện tại.",
        ],
        notReady: [
          "Chưa có security audit độc lập.",
          "Quyền truy cập extension và cơ chế xác thực local bridge vẫn cần được thu hẹp, làm cứng trước khi phát hành rộng.",
          "Chưa có quy trình đóng gói, cập nhật và phát hành ổn định cho người dùng cuối.",
        ],
        dos: [
          "Phân tích giao diện trong môi trường phát triển cá nhân.",
          "Tạo ngữ cảnh rõ ràng cho phiên làm việc với AI.",
        ],
        donts: [
          "Không cài trên profile trình duyệt chứa email, ngân hàng hoặc dữ liệu tài khoản nhạy cảm.",
          "Không xem đây là công cụ kiểm toán bảo mật hoặc sản phẩm đã sẵn sàng cho môi trường production.",
        ],
      },
    },
  },
  en: {
    signIn: {
      optionalText: "Signing in is optional. You can continue browsing or",
      backToHome: "return to the home page",
      switchSignup: "New here? Create an account",
      switchSignin: "Already have an account? Sign in",
    },
    projectsData: {
      "quantum-inspector": {
        description: [
          "MH Quantum Inspector helps identify the exact interface element that needs analysis instead of relying only on screenshots or verbal descriptions.",
          "It captures the relevant DOM context, classes, attributes and computed styles, then formats them into concise input for AI-assisted interface work.",
          "The repository is currently public for reference and development verification. The project has not undergone an independent security audit and is not recommended for browser profiles containing sensitive data.",
        ],
        features: [
          {
            name: "Precise element selection",
            desc: "Selects the exact area to analyse instead of relying on coordinates or ambiguous descriptions.",
          },
          {
            name: "Contextual DOM capture",
            desc: "Collects the relevant tag, path, classes, accessibility attributes and parent–child context.",
          },
          {
            name: "Computed-style inspection",
            desc: "Records the effective styles after the browser has resolved the CSS cascade.",
          },
          {
            name: "AI-ready output",
            desc: "Formats the useful context into concise text for ChatGPT, Claude or coding assistants.",
          },
          {
            name: "Local processing flow",
            desc: "Data is not uploaded to a Studio server. When the MCP bridge is enabled, the payload is sent through a local service at 127.0.0.1 and may be stored temporarily on the user's machine.",
          },
        ],
        evidence: [
          "Element selection and technical-context export are working.",
          "Used inside Studio Minh Hieu's interface-development workflow.",
          "The public repository reflects the current source code and development state.",
        ],
        notReady: [
          "No independent security audit has been completed.",
          "Extension permissions and local-bridge authentication still need to be reduced and hardened before broader release.",
          "A stable packaging, update and end-user release process is not yet available.",
        ],
        dos: [
          "Analyse interfaces in a personal development environment.",
          "Create clear context for AI-assisted work sessions.",
        ],
        donts: [
          "Do not install it in a browser profile containing email, banking or other sensitive account data.",
          "Do not treat it as a security-audit tool or a production-ready product.",
        ],
      },
    },
  },
} as const;

export default auditFixOverrides;
