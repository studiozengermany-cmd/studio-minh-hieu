const siteUrl = 'https://studiominhhieu.com';

export const copy = {
  vi: {
    meta: {
      lang: 'vi',
      locale: 'vi_VN',
      url: `${siteUrl}/`,
      canonical: `${siteUrl}/`,
      alternateVi: `${siteUrl}/`,
      alternateEn: `${siteUrl}/en/`,
      title: 'MINH HIEU STUDIO — DJ, Producer, FL Studio và dự án âm nhạc',
      description: 'MINH HIEU STUDIO — hành trình DJ/producer, Vinahouse, bản remix, kinh nghiệm FL Studio và các công cụ được phát triển từ nhu cầu làm việc thực tế.',
      ogTitle: 'MINH HIEU STUDIO — DJ & Producer',
      ogDescription: 'Âm nhạc, Vinahouse, FL Studio, hình ảnh biểu diễn thật và những dự án đang được xây dựng.',
      inLanguage: 'vi-VN',
      schemaDescription: 'Trang cá nhân về DJ, sản xuất âm nhạc, FL Studio và các dự án thực tế.'
    },
    nav: {
      ariaLabel: 'Điều hướng chính',
      toggleLabel: 'Mở hoặc đóng menu',
      switchLabel: 'EN',
      switchHref: '/en/',
      switchAriaLabel: 'Switch to English',
      items: [
        { href: '#home', label: 'Trang chủ' },
        { href: '#music', label: 'Âm nhạc' },
        { href: '#archive', label: 'Tư liệu' },
        { href: '#projects', label: 'Dự án' },
        { href: '#notes', label: 'Ghi chú' },
        { href: '#contact', label: 'Liên hệ' }
      ]
    },
    hero: {
      collabLabel: 'Collab spec',
      tagline: 'Studio cá nhân về âm nhạc & thử nghiệm công cụ. Nơi lưu trữ hành trình làm nhạc, ảnh archive, ghi chú workflow, và các dự án kết hợp AI, tools & music.',
      primaryCta: 'Xem dự án',
      contactCta: 'Liên hệ'
    },
    music: {
      heading: 'Âm nhạc',
      intro: 'Bản nghe thử được lấy trực tiếp từ file master do Minh Hiếu cung cấp và chỉ phát hành dưới dạng preview trên website.',
      coverAlt: 'Minh Hiếu biểu diễn DJ — ảnh bìa bản remix',
      kicker: 'Bản nghe thử · 2026',
      trackTitle: 'Liễu Thanh Yên x J97',
      version: 'Minh Hieu Remix 2K26',
      description: 'Một bản remix đang được lưu trong archive cá nhân. Website sử dụng đoạn preview 60 giây để giới thiệu màu sắc âm nhạc mà không công khai toàn bộ file master.',
      audioLabel: 'Nghe preview Liễu Thanh Yên x J97 — Minh Hieu Remix 2K26',
      audioFallback: 'Trình duyệt của bạn không hỗ trợ phát âm thanh.',
      metaLabel: 'Thông tin bản nhạc',
      meta: ['Preview 01:00', 'Minh Hieu Remix', '2026'],
      details: [
        {
          kicker: 'Hướng âm nhạc',
          title: 'Vinahouse & DJ',
          closedLabel: 'Mở nội dung',
          body: 'Hướng làm việc tập trung vào lựa chọn âm sắc, arrangement, xử lý vocal, đoạn chuyển và cách hoàn thiện phiên bản phù hợp cho việc nghe hoặc biểu diễn.'
        },
        {
          kicker: 'Quy trình',
          title: 'FL Studio',
          closedLabel: 'Mở nội dung',
          body: 'Project, sample, preset và plugin được tổ chức để giảm thời gian tìm kiếm, hạn chế mất đường dẫn và giữ cho những project cũ có thể mở lại sau thời gian dài.'
        }
      ]
    },
    archive: {
      heading: 'Tư liệu biểu diễn',
      intro: 'Hình ảnh thật từ những lần đứng tại booth, poster và không gian sự kiện.',
      figures: [
        { src: '/assets/show/dj-performing-01.webp', className: 'show-card--portrait', width: 1400, height: 1800, alt: 'Minh Hiếu đang điều khiển bàn DJ tại Six T Club', caption: 'Khoảnh khắc làm việc trực tiếp tại booth.' },
        { src: '/assets/show/dj-performing-02.webp', className: 'show-card--hero', width: 1400, height: 1400, alt: 'Minh Hiếu biểu diễn DJ dưới hệ thống laser sân khấu', caption: 'Tương tác với không gian và khán giả trong buổi diễn.' },
        { src: '/assets/show/guest-dj-poster.webp', className: 'show-card--poster', width: 1200, height: 1500, alt: 'Poster Guest DJ tại Six T Club ngày 12 tháng 3 năm 2024', caption: 'Poster Guest DJ — Six T Club, 12.03.2024.' },
        { src: '/assets/show/six-t-club-stage.webp', className: 'show-card--wide', width: 1600, height: 1200, alt: 'Sân khấu Six T Club hiển thị poster Guest DJ', caption: 'Poster được trình chiếu trực tiếp trên màn hình sân khấu.' },
        { src: '/assets/show/dj-red-stage.webp', className: 'show-card--square', width: 1400, height: 1400, alt: 'Ảnh tại booth DJ trong một sự kiện sân khấu', caption: 'Một khoảnh khắc khác phía sau bàn DJ.' }
      ]
    },
    projects: {
      heading: 'Dự án đang làm',
      intro: 'Những công cụ được hình thành từ vấn đề thật trong quá trình làm nhạc. Trạng thái của từng dự án được ghi rõ.',
      status: 'Đang thử nghiệm',
      title: 'SampleGuard FL',
      closedLabel: 'Xem chi tiết',
      lead: 'SampleGuard FL được phát triển để tìm sample nhanh hơn, ghi nhớ sample đã dùng theo từng project và kiểm tra rủi ro trước khi xử lý file trùng.',
      features: [
        { image: '/assets/sampleguard-drag-drop.webp', alt: 'Giao diện tìm kiếm, nghe thử và kéo thả sample của SampleGuard FL', title: 'Tìm, nghe thử và kéo thả', body: 'Tìm sample trong thư viện cục bộ, nghe preview và kéo thả vào FL Studio mà không phải mở nhiều thư mục trong lúc đang làm nhạc.' },
        { image: '/assets/sampleguard-safe-lab.webp', alt: 'Giao diện Project-Safe Lab của SampleGuard FL', title: 'Project-Safe Lab', body: 'Mô phỏng việc xử lý sample trùng trước khi áp dụng thật, giúp nhận diện file có nguy cơ đang được project cũ tham chiếu.' },
        { image: '/assets/sampleguard-memory.webp', alt: 'Giao diện Find and Remember của SampleGuard FL', title: 'Find & Remember', body: 'Ghi nhớ mối liên hệ giữa sample và project để hỗ trợ tìm lại đúng file, đúng vị trí và đúng ngữ cảnh khi mở lại dự án cũ.' }
      ],
      factsLabel: 'Trạng thái dự án',
      facts: ['Windows / FL Studio', 'Prototype', 'Chưa phát hành công khai'],
      collabLabel: 'Studio Minh Hieu và MinhLyTeam'
    },
    notes: {
      heading: 'Ghi chú thực tế',
      intro: 'Những vấn đề từng gặp khi làm việc với FL Studio, sample, plugin, project và AI.',
      items: [
        { kicker: 'Quản lý sample', title: 'Đừng xóa sample chỉ vì thấy file trùng', closedLabel: 'Đọc ghi chú', body: 'Hai file trùng tên hoặc nghe gần giống nhau chưa chắc đều có thể xóa. Project cũ có thể đang tham chiếu đúng đường dẫn của một file cụ thể. Trước khi dọn, cần kiểm tra vị trí file, project đang sử dụng và giữ bản sao có thể phục hồi.' },
        { kicker: 'FL Studio', title: 'Project lỗi chưa có nghĩa là mất toàn bộ project', closedLabel: 'Đọc ghi chú', body: 'Project không mở được có thể do plugin, preset, đường dẫn sample hoặc phiên bản phần mềm. Việc đầu tiên là giữ nguyên file gốc, kiểm tra autosave và cô lập thành phần gây lỗi trước khi reset, xóa hoặc thay đổi dữ liệu.' },
        { kicker: 'Quy trình với AI', title: 'AI chỉ được sửa phần việc đã khoanh vùng', closedLabel: 'Đọc ghi chú', body: 'AI phù hợp để tìm lỗi, phân tích phương án và triển khai đúng phần việc được giao. Thiết kế đã duyệt, dữ liệu thật và hướng đi của sản phẩm cần được giữ nguyên cho đến khi có quyết định thay đổi rõ ràng.' }
      ]
    },
    contact: {
      heading: 'Liên hệ',
      description: 'Gửi lời nhắn hoặc yêu cầu hỗ trợ khách hàng trực tiếp.',
      label: 'EMAIL',
      value: 'Gửi lời nhắn',
      subject: 'Liên hệ từ studiominhhieu.com'
    },
    footer: {
      links: [
        { label: 'Liên hệ', subject: '' },
        { label: 'Gửi lời nhắn', subject: 'Gửi lời nhắn' },
        { label: 'Hỗ trợ khách hàng trực tiếp', subject: 'Hỗ trợ khách hàng trực tiếp' }
      ],
      copyright: '© 2026 MINH HIEU STUDIO.'
    }
  },
  en: {
    meta: {
      lang: 'en',
      locale: 'en_US',
      url: `${siteUrl}/en/`,
      canonical: `${siteUrl}/en/`,
      alternateVi: `${siteUrl}/`,
      alternateEn: `${siteUrl}/en/`,
      title: 'MINH HIEU STUDIO — DJ, Producer, FL Studio and music projects',
      description: 'MINH HIEU STUDIO — DJ/producer journey, Vinahouse, remix previews, FL Studio workflow notes, and tools shaped by real studio needs.',
      ogTitle: 'MINH HIEU STUDIO — DJ & Producer',
      ogDescription: 'Music, Vinahouse, FL Studio, real performance archive, and active studio projects.',
      inLanguage: 'en-US',
      schemaDescription: 'A personal studio site about DJ work, music production, FL Studio, and real projects.'
    },
    nav: {
      ariaLabel: 'Primary navigation',
      toggleLabel: 'Open or close menu',
      switchLabel: 'VI',
      switchHref: '/',
      switchAriaLabel: 'Chuyển sang tiếng Việt',
      items: [
        { href: '#home', label: 'Home' },
        { href: '#music', label: 'Music' },
        { href: '#archive', label: 'Archive' },
        { href: '#projects', label: 'Projects' },
        { href: '#notes', label: 'Notes' },
        { href: '#contact', label: 'Contact' }
      ]
    },
    hero: {
      collabLabel: 'Collab spec',
      tagline: 'A personal studio for music and tool experiments. This space archives the music journey, live-show images, workflow notes, and projects combining AI, tools, and music.',
      primaryCta: 'View projects',
      contactCta: 'Contact'
    },
    music: {
      heading: 'Music',
      intro: 'The preview comes directly from a master file provided by Minh Hieu and is published only as a website preview.',
      coverAlt: 'Minh Hieu performing as a DJ — remix cover image',
      kicker: 'Preview track · 2026',
      trackTitle: 'Liễu Thanh Yên x J97',
      version: 'Minh Hieu Remix 2K26',
      description: 'A remix kept in the personal archive. The website uses a 60-second preview to present the music direction without publishing the full master file.',
      audioLabel: 'Listen to the Liễu Thanh Yên x J97 — Minh Hieu Remix 2K26 preview',
      audioFallback: 'Your browser does not support audio playback.',
      metaLabel: 'Track information',
      meta: ['Preview 01:00', 'Minh Hieu Remix', '2026'],
      details: [
        {
          kicker: 'Music direction',
          title: 'Vinahouse & DJ',
          closedLabel: 'Open content',
          body: 'The workflow focuses on sound selection, arrangement, vocal processing, transitions, and finishing versions that work for listening or performance.'
        },
        {
          kicker: 'Workflow',
          title: 'FL Studio',
          closedLabel: 'Open content',
          body: 'Projects, samples, presets, and plugins are organized to reduce search time, avoid broken paths, and keep older projects easier to reopen later.'
        }
      ]
    },
    archive: {
      heading: 'Performance archive',
      intro: 'Real images from DJ booth sessions, posters, and event spaces.',
      figures: [
        { src: '/assets/show/dj-performing-01.webp', className: 'show-card--portrait', width: 1400, height: 1800, alt: 'Minh Hieu controlling the DJ booth at Six T Club', caption: 'A real working moment at the booth.' },
        { src: '/assets/show/dj-performing-02.webp', className: 'show-card--hero', width: 1400, height: 1400, alt: 'Minh Hieu performing under stage laser lights', caption: 'Interacting with the room and audience during a set.' },
        { src: '/assets/show/guest-dj-poster.webp', className: 'show-card--poster', width: 1200, height: 1500, alt: 'Guest DJ poster at Six T Club on March 12, 2024', caption: 'Guest DJ poster — Six T Club, 12.03.2024.' },
        { src: '/assets/show/six-t-club-stage.webp', className: 'show-card--wide', width: 1600, height: 1200, alt: 'Six T Club stage screen showing the Guest DJ poster', caption: 'The poster displayed live on the stage screen.' },
        { src: '/assets/show/dj-red-stage.webp', className: 'show-card--square', width: 1400, height: 1400, alt: 'DJ booth photo from a stage event', caption: 'Another moment behind the decks.' }
      ]
    },
    projects: {
      heading: 'Current projects',
      intro: 'Tools shaped by real problems found during music work. Each project status is shown clearly.',
      status: 'In testing',
      title: 'SampleGuard FL',
      closedLabel: 'View details',
      lead: 'SampleGuard FL is being built to find samples faster, remember which samples were used in each project, and check risk before handling duplicate files.',
      features: [
        { image: '/assets/sampleguard-drag-drop.webp', alt: 'SampleGuard FL interface for searching, previewing, and dragging samples', title: 'Search, preview, and drag', body: 'Find samples in a local library, preview them, and drag them into FL Studio without opening many folders during a session.' },
        { image: '/assets/sampleguard-safe-lab.webp', alt: 'SampleGuard FL Project-Safe Lab interface', title: 'Project-Safe Lab', body: 'Simulate duplicate-sample handling before applying changes, helping identify files that may still be referenced by older projects.' },
        { image: '/assets/sampleguard-memory.webp', alt: 'SampleGuard FL Find and Remember interface', title: 'Find & Remember', body: 'Remember relationships between samples and projects to help locate the right file, path, and context when reopening older work.' }
      ],
      factsLabel: 'Project status',
      facts: ['Windows / FL Studio', 'Prototype', 'Not publicly released yet'],
      collabLabel: 'Studio Minh Hieu and MinhLyTeam'
    },
    notes: {
      heading: 'Practical notes',
      intro: 'Real issues encountered while working with FL Studio, samples, plugins, projects, and AI.',
      items: [
        { kicker: 'Sample management', title: 'Do not delete samples just because files look duplicated', closedLabel: 'Read note', body: 'Two files with the same name or similar sound are not automatically safe to delete. Older projects may reference one exact file path. Before cleanup, check the file location, project usage, and keep a recoverable backup.' },
        { kicker: 'FL Studio', title: 'A broken project does not always mean the whole project is lost', closedLabel: 'Read note', body: 'A project may fail to open because of a plugin, preset, sample path, or software version. The first step is to keep the original file untouched, check autosaves, and isolate the failing part before resetting, deleting, or changing data.' },
        { kicker: 'AI workflow', title: 'AI should only change the scoped task', closedLabel: 'Read note', body: 'AI is useful for finding bugs, comparing options, and implementing the assigned part. Approved design, real data, and product direction should stay unchanged until there is a clear decision to change them.' }
      ]
    },
    contact: {
      heading: 'Contact',
      description: 'Send a message or request direct customer support.',
      label: 'EMAIL',
      value: 'Send a message',
      subject: 'Contact from studiominhhieu.com'
    },
    footer: {
      links: [
        { label: 'Contact', subject: '' },
        { label: 'Send a message', subject: 'Send a message' },
        { label: 'Direct customer support', subject: 'Direct customer support' }
      ],
      copyright: '© 2026 MINH HIEU STUDIO.'
    }
  }
} as const;

export type SiteCopy = (typeof copy)[keyof typeof copy];
