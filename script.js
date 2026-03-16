/* ======================================================
   NUTRIZONE — Premium Supplement Store
   script.js
   ====================================================== */

'use strict';

/* ==================== NAVBAR SCROLL ==================== */
(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* ==================== HAMBURGER / MOBILE MENU ==================== */
(function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

function closeMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

/* ==================== SCROLL REVEAL ==================== */
(function initReveal() {
  const els = document.querySelectorAll('.reveal-up');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => observer.observe(el));
})();

/* ==================== BACK TO TOP ==================== */
(function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ==================== PRODUCT FILTER ==================== */
(function initProductFilter() {
  const catTabs   = document.getElementById('catTabs');
  const brandTabs = document.getElementById('brandTabs');
  const grid      = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');

  if (!catTabs || !brandTabs || !grid) return;

  let activeCat   = 'all';
  let activeBrand = 'all';

  function applyFilters() {
    const cards  = grid.querySelectorAll('.pcard');
    let visible  = 0;

    cards.forEach(card => {
      const matchCat   = activeCat   === 'all' || card.dataset.cat   === activeCat;
      const matchBrand = activeBrand === 'all' || card.dataset.brand === activeBrand;
      const show = matchCat && matchBrand;

      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  }

  // Category tabs
  catTabs.querySelectorAll('.ftab').forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCat = tab.dataset.cat;
      applyFilters();
    });
  });

  // Brand tabs
  brandTabs.querySelectorAll('.ftab').forEach(tab => {
    tab.addEventListener('click', () => {
      brandTabs.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeBrand = tab.dataset.brand;
      applyFilters();
    });
  });
})();

/* ==================== WEIGHT CHIP TOGGLE ==================== */
(function initWeightChips() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('weight-chip')) return;
    const parent = e.target.closest('.pcard-weight-row');
    if (!parent) return;
    parent.querySelectorAll('.weight-chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
  });
})();

/* ==================== WISHLIST HEARTS ==================== */
(function initWishlist() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('pcard-wishlist')) return;
    const btn = e.target;
    const isFav = btn.classList.toggle('fav');
    btn.textContent = isFav ? '♥' : '♡';

    // Get product name for feedback
    const card = btn.closest('.pcard');
    const name = card?.querySelector('.pcard-name')?.textContent || 'Product';
    showToast(isFav ? `❤️ ${name} saved!` : `Removed from wishlist`);
  });
})();

/* ==================== MAP MODAL ==================== */
(function initMapModal() {
  const openBtn   = document.getElementById('mapOpenBtn');
  const modal     = document.getElementById('mapModal');
  const backdrop  = document.getElementById('mapBackdrop');
  const closeBtn  = document.getElementById('mapModalClose');

  if (!modal || !backdrop) return;

  function openModal() {
    modal.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn)  openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();

/* ==================== TOAST NOTIFICATION ==================== */
let toastTimer = null;

function showToast(msg) {
  let toast = document.getElementById('nz-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'nz-toast';
    Object.assign(toast.style, {
      position:       'fixed',
      bottom:         '80px',
      left:           '50%',
      transform:      'translateX(-50%) translateY(20px)',
      background:     '#0C0C0C',
      color:          '#fff',
      padding:        '12px 24px',
      borderRadius:   '50px',
      fontFamily:     "'Plus Jakarta Sans', sans-serif",
      fontSize:       '0.82rem',
      fontWeight:     '500',
      letterSpacing:  '0.03em',
      zIndex:         '9999',
      opacity:        '0',
      transition:     'opacity 0.3s ease, transform 0.3s ease',
      whiteSpace:     'nowrap',
      boxShadow:      '0 6px 28px rgba(0,0,0,0.2)',
      pointerEvents:  'none',
    });
    document.body.appendChild(toast);
  }

  toast.textContent = msg;

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2600);
}

/* ==================== BRAND CARD CLICK (filter) ==================== */
(function initBrandCardClick() {
  document.querySelectorAll('.brand-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const brandId = card.dataset.brand;
      if (!brandId) return;

      // Trigger brand filter tab
      const tab = document.querySelector(`#brandTabs .ftab[data-brand="${brandId}"]`);
      if (tab) {
        tab.click();
        // Scroll to products
        const products = document.getElementById('products');
        if (products) {
          products.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        showToast(`Showing ${card.querySelector('.brand-logo')?.textContent || brandId} products`);
      }
    });
  });
})();

/* ==================== SMOOTH ACTIVE NAV HIGHLIGHT ==================== */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const links    = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ==================== IMAGE LAZY ERROR FALLBACK ==================== */
(function initImgFallback() {
  document.querySelectorAll('.pcard-img img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const parent = img.parentElement;
      if (!parent.querySelector('.img-fallback')) {
        const fb = document.createElement('div');
        fb.className = 'img-fallback';
        Object.assign(fb.style, {
          position:   'absolute',
          inset:      '0',
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize:   '3.5rem',
          background: 'linear-gradient(135deg, #f0efea, #e8e6df)',
        });
        fb.textContent = '🥛';
        parent.appendChild(fb);
      }
    });
  });
})();

/* ==================== HERO PARALLAX ==================== */
(function initParallax() {
  const bg = document.querySelector('.hero-bg-img');
  if (!bg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight * 1.2) {
      bg.style.transform = `translateY(${scrolled * 0.28}px)`;
    }
  }, { passive: true });
})();
