/**
 * NARINDE CLOTHING STUDIO - JAVASCRIPT LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyNav();
  initCatalogFilter();
  initSizeChart();
  initFaqAccordion();
});

/* ================= 1. MOBILE MENU ================= */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ================= 2. STICKY NAVBAR SHADOW ================= */
function initStickyNav() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ================= 3. CATALOG CATEGORY FILTER ================= */
function initCatalogFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const cat = btn.getAttribute('data-category');

      productCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => { card.style.opacity = '1'; }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ================= 4. SIZE CHART GUIDE ================= */
function initSizeChart() {
  const sizeTabs = document.querySelectorAll('.size-tab');
  const tableBody = document.getElementById('sizeTableBody');

  const sizeData = {
    regular: [
      { size: 'S', chest: '48', length: '68', sleeve: '20', weight: '45 - 55 kg' },
      { size: 'M', chest: '50', length: '70', sleeve: '21', weight: '55 - 65 kg' },
      { size: 'L', chest: '52', length: '72', sleeve: '22', weight: '65 - 75 kg' },
      { size: 'XL', chest: '54', length: '74', sleeve: '23', weight: '75 - 85 kg' },
      { size: 'XXL', chest: '58', length: '76', sleeve: '24', weight: '85 - 95 kg' },
      { size: '3XL', chest: '62', length: '78', sleeve: '25', weight: '> 95 kg' }
    ],
    oversized: [
      { size: 'M (Boxy)', chest: '56', length: '70', sleeve: '24 (Drop)', weight: '50 - 68 kg' },
      { size: 'L (Boxy)', chest: '60', length: '73', sleeve: '25 (Drop)', weight: '68 - 82 kg' },
      { size: 'XL (Boxy)', chest: '64', length: '76', sleeve: '26 (Drop)', weight: '82 - 95 kg' },
      { size: 'XXL (Boxy)', chest: '68', length: '78', sleeve: '27 (Drop)', weight: '> 95 kg' }
    ],
    polo: [
      { size: 'S', chest: '49', length: '68', sleeve: '21', weight: '45 - 55 kg' },
      { size: 'M', chest: '51', length: '70', sleeve: '22', weight: '55 - 65 kg' },
      { size: 'L', chest: '53', length: '72', sleeve: '23', weight: '65 - 75 kg' },
      { size: 'XL', chest: '55', length: '74', sleeve: '24', weight: '75 - 85 kg' },
      { size: 'XXL', chest: '59', length: '77', sleeve: '25', weight: '> 85 kg' }
    ],
    hoodie: [
      { size: 'M', chest: '56', length: '68', sleeve: '60', weight: '50 - 65 kg' },
      { size: 'L', chest: '60', length: '71', sleeve: '62', weight: '65 - 78 kg' },
      { size: 'XL', chest: '64', length: '74', sleeve: '64', weight: '78 - 90 kg' },
      { size: 'XXL', chest: '68', length: '77', sleeve: '66', weight: '> 90 kg' }
    ]
  };

  function renderTable(fitKey) {
    if (!tableBody) return;
    const rows = sizeData[fitKey] || sizeData.regular;
    tableBody.innerHTML = rows.map(r => `
      <tr>
        <td><strong>${r.size}</strong></td>
        <td>${r.chest} cm</td>
        <td>${r.length} cm</td>
        <td>${r.sleeve} cm</td>
        <td>${r.weight}</td>
      </tr>
    `).join('');
  }

  sizeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sizeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const fit = tab.getAttribute('data-fit');
      renderTable(fit);
    });
  });

  // Initial render
  renderTable('regular');
}

/* ================= 5. FAQ ACCORDION ================= */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all
        faqItems.forEach(i => {
          i.classList.remove('open');
          const b = i.querySelector('.faq-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });

        // If wasn't open, open it
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
}
