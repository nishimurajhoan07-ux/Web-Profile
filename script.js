// js/script.js — inject small SVG icons next to social links in footer

document.addEventListener('DOMContentLoaded', () => {
  try {
    const footerAreas = document.querySelectorAll('.footer');
    if (!footerAreas.length) return;

    const svgs = {
      github: `<!-- github svg -->
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.19 9.12 7.61 10.6.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.02-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1.01 1.73 2.65 1.23 3.29.94.1-.73.39-1.23.71-1.51-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.47 3.12-1.16 3.12-1.16.61 1.53.24 2.66.12 2.94.72.78 1.16 1.78 1.16 3 0 4.28-2.61 5.22-5.09 5.49.4.35.75 1.04.75 2.1 0 1.52-.01 2.74-.01 3.11 0 .29.2.64.77.53 4.41-1.48 7.59-5.67 7.59-10.6C23.25 5.48 18.27.5 12 .5z"/>
        </svg>`,
      linkedin: `<!-- linkedin svg -->
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.5h4.5V24h-4.5V8.5zM8.5 8.5h4.32v2.07h.06c.6-1.14 2.06-2.07 4.24-2.07 4.53 0 5.36 2.98 5.36 6.85V24h-4.5v-7.08c0-1.69-.03-3.86-2.35-3.86-2.36 0-2.72 1.84-2.72 3.74V24h-4.5V8.5z"/>
        </svg>`,
      twitter: `<!-- twitter svg -->
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.92 4.92 0 0 0 2.16-2.72c-.95.56-2.01.97-3.13 1.19A4.92 4.92 0 0 0 16.67 3c-2.73 0-4.94 2.2-4.94 4.92 0 .39.04.77.12 1.13C7.69 8.86 4.07 6.94 1.64 3.84c-.43.74-.67 1.6-.67 2.51 0 1.73.88 3.26 2.22 4.15a4.85 4.85 0 0 1-2.24-.62v.06c0 2.42 1.72 4.44 4 4.9-.42.12-.85.18-1.3.18-.32 0-.63-.03-.93-.09.63 1.98 2.46 3.42 4.63 3.46A9.88 9.88 0 0 1 0 19.54 13.94 13.94 0 0 0 7.55 22c9.05 0 14-7.5 14-14v-.64c.96-.69 1.8-1.56 2.46-2.55z"/>
        </svg>`
    };

    footerAreas.forEach(footer => {
      // find anchor links in the footer — we look for the visible text
      const anchors = footer.querySelectorAll('a');
      anchors.forEach(a => {
        const txt = (a.textContent || '').trim().toLowerCase();
        let key = null;
        if (txt.startsWith('github') || txt.includes('github')) key = 'github';
        else if (txt.startsWith('linkedin') || txt.includes('linkedin')) key = 'linkedin';
        else if (txt.startsWith('twitter') || txt.includes('twitter')) key = 'twitter';
        if (key) {
          // avoid duplicating if icon already present
          if (a.querySelector('.social-icon')) return;
          // insert svg at start
          const span = document.createElement('span');
          span.className = 'social-icon-wrapper';
          span.innerHTML = svgs[key];
          // prepend the svg
          a.insertBefore(span, a.firstChild);
          // add a helper class
          a.classList.add('social-link');
        }
      });
    });
  } catch (e) {
    // fail silently
    console.warn('social icon injector error', e);
  }
});
