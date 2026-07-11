'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.getElementById('contact-email');

  if (emailLink) {
    emailLink.addEventListener('click', (event) => {
      event.preventDefault();

      const user = emailLink.dataset.user;
      const domain = emailLink.dataset.domain;
      if (!user || !domain) return;

      const address = `${user}@${domain}`;
      const subject = encodeURIComponent('Liên hệ từ studiominhhieu.com');
      window.location.href = `mailto:${address}?subject=${subject}`;
    });
  }

  document.querySelectorAll('details').forEach((detail) => {
    const action = detail.querySelector('.content-detail__action');
    if (!action) return;

    const closedText = action.dataset.closed || action.textContent.trim();

    const refreshLabel = () => {
      action.textContent = detail.open ? 'Thu gọn' : closedText;
    };

    detail.addEventListener('toggle', refreshLabel);
    refreshLabel();
  });
});
