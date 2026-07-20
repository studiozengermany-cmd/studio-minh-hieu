/* ============================================================
   MINH HIEU STUDIO — Main Script
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = nav?.querySelector('.nav__toggle');
  const links = nav?.querySelectorAll('.nav__links a');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
      const isOpen = nav.classList.contains('nav--open');
      toggle.setAttribute('aria-expanded', String(isOpen));

      // Staggered link reveal khi mở menu mobile
      if (isOpen && typeof window.gsap !== 'undefined') {
        const mobileLinks = nav.querySelectorAll('.nav__links li');
        gsap.fromTo(mobileLinks,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.06,
            delay: 0.1
          }
        );
      }
    });

    links?.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    if (!links?.length) return;

    let current = '';
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  if (links?.length) {
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  }

  // Keep only one expandable item open in the same section.
  document.querySelectorAll('.section').forEach((section) => {
    const details = section.querySelectorAll('details');
    details.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        details.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  });

  if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
    const { gsap, ScrollTrigger } = window;
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.registerPlugin(ScrollTrigger);

      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      heroTl.fromTo('.hero__title h1', {
        rotationX: -15,
        y: 40,
        z: -80,
        opacity: 0,
        transformPerspective: 1200,
        transformOrigin: '0% 100%',
        filter: 'blur(6px)'
      }, {
        rotationX: 0,
        y: 0,
        z: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.6,
        ease: 'power3.out'
      }, 0.3);

      heroTl.fromTo('.hero__tagline',
        { y: 30, opacity: 0, filter: 'blur(5px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5 },
        '-=1.0'
      );

      heroTl.fromTo('.hero__actions',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        '-=1.2'
      );

      const cards = document.querySelectorAll('.card--reveal');
      cards.forEach((card) => {
        gsap.fromTo(card,
          { y: 28, opacity: 0.35, filter: 'blur(6px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              once: true
            }
          }
        );
      });

      const aboutLines = document.querySelectorAll('.about__content p');
      if (aboutLines.length) {
        gsap.fromTo(aboutLines,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: '.about__content',
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    });

    const heroContainer = document.querySelector('.hero__3d');
    const heroTitle = document.querySelector('.hero__title');
    const motionAllowed = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    if (heroContainer && heroTitle && motionAllowed) {
      heroContainer.addEventListener('mousemove', (event) => {
        const rect = heroContainer.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        gsap.to(heroTitle, {
          rotationY: x * 5,
          rotationX: -y * 3,
          transformPerspective: 1200,
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    }

    // Hiệu ứng quầng sáng Gemini di chuyển mượt mà theo chuột
    const glow = document.getElementById('gemini-glow');
    if (glow && motionAllowed) {
      window.addEventListener('mousemove', (event) => {
        gsap.to(glow, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        if (glow.style.opacity !== '1') {
          gsap.to(glow, { opacity: 1, duration: 0.4 });
        }
      });

      document.addEventListener('mouseleave', () => {
        gsap.to(glow, { opacity: 0, duration: 0.6 });
      });
    }
  }

  const reviewEnabled = ['localhost', '127.0.0.1'].includes(window.location.hostname)
    || new URLSearchParams(window.location.search).get('review') === '1';

  if (reviewEnabled) initFeedbackInspector();
});

function initFeedbackInspector() {
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'feedback-toggle-btn';
  toggleBtn.textContent = '🔍 Phân vùng Feedback';
  document.body.appendChild(toggleBtn);

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'feedback-modal-overlay';
  modalOverlay.innerHTML = `
    <div class="feedback-modal" role="dialog" aria-modal="true" aria-labelledby="feedback-title">
      <h3 id="feedback-title">🛠️ Phản hồi khoanh vùng</h3>
      <p style="font-size:0.875rem;color:var(--color-muted);margin:0;">AI chỉ được chỉnh sửa trong phân vùng được chọn dưới đây:</p>
      <div class="feedback-modal-selector" id="feedback-selector-name"></div>
      <textarea id="feedback-input" placeholder="Nhập yêu cầu sửa đổi cho vùng này..."></textarea>
      <div class="feedback-modal-actions">
        <button class="feedback-btn feedback-btn--close" id="feedback-btn-close">Đóng</button>
        <button class="feedback-btn feedback-btn--copy" id="feedback-btn-copy">Sao chép câu lệnh gửi AI</button>
      </div>
    </div>`;
  document.body.appendChild(modalOverlay);

  let isInspecting = false;
  let hoveredElement = null;
  let selectedElement = null;

  function getSelector(element) {
    if (!element) return '';
    if (element.id) return `${element.tagName.toLowerCase()}#${element.id}`;

    const classes = Array.from(element.classList).filter((name) => !name.startsWith('feedback-'));
    if (classes.length) return `${element.tagName.toLowerCase()}.${classes.join('.')}`;
    return element.tagName.toLowerCase();
  }

  function getInspectableTarget(element) {
    const allowed = ['section', 'article', 'details', 'nav', 'footer', '.nav__inner', '.hero__content', '.about__content', '.grid', '.content-grid', '.archive-block'];
    let current = element;

    while (current && current !== document.body) {
      if (allowed.some((selector) => selector.startsWith('.')
        ? current.classList.contains(selector.slice(1))
        : current.tagName.toLowerCase() === selector)) {
        return current;
      }
      current = current.parentElement;
    }
    return null;
  }

  function clearHighlight() {
    if (!hoveredElement) return;
    hoveredElement.classList.remove('feedback-highlight');
    hoveredElement.removeAttribute('data-selector-label');
    hoveredElement = null;
  }

  function handleMouseOver(event) {
    if (!isInspecting) return;
    const target = getInspectableTarget(event.target);
    if (!target || target === hoveredElement) return;

    clearHighlight();
    hoveredElement = target;
    hoveredElement.classList.add('feedback-highlight');
    hoveredElement.setAttribute('data-selector-label', getSelector(target));
  }

  function handleMouseOut(event) {
    if (!isInspecting) return;
    const target = getInspectableTarget(event.target);
    if (target === hoveredElement) clearHighlight();
  }

  function stopInspecting() {
    isInspecting = false;
    toggleBtn.classList.remove('active');
    toggleBtn.textContent = '🔍 Phân vùng Feedback';
    document.body.classList.remove('feedback-inspecting');
    clearHighlight();
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
    document.removeEventListener('click', handleElementClick, true);
  }

  function handleElementClick(event) {
    if (!isInspecting) return;
    const target = getInspectableTarget(event.target);
    if (!target) return;

    event.preventDefault();
    event.stopPropagation();
    selectedElement = target;
    stopInspecting();

    document.getElementById('feedback-selector-name').textContent = getSelector(selectedElement);
    document.getElementById('feedback-input').value = '';
    modalOverlay.classList.add('open');
    document.getElementById('feedback-input').focus();
  }

  toggleBtn.addEventListener('click', () => {
    if (isInspecting) {
      stopInspecting();
      return;
    }

    isInspecting = true;
    toggleBtn.classList.add('active');
    toggleBtn.textContent = '⏹️ Đang quét (Click để chọn)';
    document.body.classList.add('feedback-inspecting');
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleElementClick, true);
  });

  document.getElementById('feedback-btn-close').addEventListener('click', () => {
    modalOverlay.classList.remove('open');
    selectedElement = null;
  });

  document.getElementById('feedback-btn-copy').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    const feedback = document.getElementById('feedback-input').value.trim();
    if (!feedback || !selectedElement) return;

    const prompt = `[TARGET_SELECTOR: ${getSelector(selectedElement)}]\n[FEEDBACK]: ${feedback}`;

    try {
      await navigator.clipboard.writeText(prompt);
      const previous = button.textContent;
      button.textContent = '✅ Đã sao chép';
      setTimeout(() => {
        button.textContent = previous;
        modalOverlay.classList.remove('open');
        selectedElement = null;
      }, 1200);
    } catch (error) {
      console.error('Không thể sao chép:', error);
      document.getElementById('feedback-input').value = prompt;
      document.getElementById('feedback-input').select();
    }
  });
}
