/**
 * TraSoft — Interactividad principal
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initNavMobile();
  initCursorGlow();
  initSectorTabs();
  initDemoTabs();
  initServiceLinks();
  initScrollReveal();
});

/* Header scroll effect */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Mobile navigation */
function initNavMobile() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Cursor glow follow */
function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) {
    glow?.remove();
    return;
  }

  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    x += (targetX - x) * 0.08;
    y += (targetY - y) * 0.08;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    requestAnimationFrame(animate);
  }
  animate();
}

/* Sector tabs */
function initSectorTabs() {
  const tabs = document.querySelectorAll('.sector-tab');
  const panels = document.querySelectorAll('.sector-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const sector = tab.dataset.sector;

      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach((panel) => {
        const isActive = panel.id === `panel-${sector}`;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
      });
    });
  });
}

/* Demo tabs */
function initDemoTabs() {
  const tabs = document.querySelectorAll('.demo-tab');
  const panels = document.querySelectorAll('.demo-panel');

  function showDemo(demoId) {
    tabs.forEach((t) => {
      t.classList.toggle('active', t.dataset.demoTab === demoId);
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.demoPanel === demoId;
      panel.classList.toggle('active', isActive);
      panel.hidden = !isActive;

      if (isActive) {
        restartAnimations(panel);
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => showDemo(tab.dataset.demoTab));
  });
}

/* Restart CSS animations when switching demo */
function restartAnimations(panel) {
  const animated = panel.querySelectorAll(
    '.msg, .inv-alert, .inv-stamp, .anim-msg-1, .anim-msg-2, .anim-msg-3, .anim-msg-4, .anim-msg-5'
  );
  animated.forEach((el) => {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = '';
  });
}

/* Service cards link to demos or contacto */
function initServiceLinks() {
  document.querySelectorAll('.service-link').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.action === 'contacto') {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      const demoId = btn.dataset.demo;
      const demosSection = document.getElementById('demos');
      demosSection?.scrollIntoView({ behavior: 'smooth' });

      const demoTab = document.querySelector(`[data-demo-tab="${demoId}"]`);
      if (demoTab) {
        setTimeout(() => demoTab.click(), 400);
      }
    });
  });
}

/* Scroll reveal */
function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.section-header, .service-card, .process-step, .sector-panel, .demo-wrapper, .contact-simple, .desarrollo-banner'
  );

  elements.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}
