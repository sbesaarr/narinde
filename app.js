/**
 * NARINDE GROUP - Interactive Frontend Controller
 * Features: Clothing Cost Simulator, Division Filtering, Inquiry Modal, WhatsApp Dispatch, Theme & FAQs
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= 1. THEME TOGGLE =================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('narinde_theme') || 'light';
  htmlRoot.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', next);
      localStorage.setItem('narinde_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  // ================= 2. NAVBAR SCROLL EFFECT =================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ================= 3. MOBILE MENU TOGGLE =================
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show-mobile');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show-mobile');
      });
    });
  }

  // ================= 4. DIVISION TAB FILTERING =================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const divisionSections = document.querySelectorAll('.division-section');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      divisionSections.forEach(sec => {
        if (target === 'all' || sec.id === `section-${target}`) {
          sec.style.display = 'block';
          sec.style.opacity = '0';
          setTimeout(() => {
            sec.style.transition = 'opacity 0.4s ease';
            sec.style.opacity = '1';
          }, 20);
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });

  // (Kalkulator biaya dinonaktifkan sesuai permintaan pengguna; diganti dengan katalog paket langsung mulai Rp 50.000)

  // ================= 6. INQUIRY MODAL (WHATSAPP DISPATCH) =================
  const inquiryModal = document.getElementById('inquiryModal');
  const openModalButtons = document.querySelectorAll('.btn-open-inquiry');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const inquiryForm = document.getElementById('inquiryForm');

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const preselectedDivision = btn.getAttribute('data-division') || 'all';
      const selectElem = document.getElementById('inquiryDivision');
      if (selectElem && preselectedDivision !== 'all') {
        selectElem.value = preselectedDivision;
      }
      openModal();
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (inquiryModal) {
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) closeModal();
    });
  }

  function openModal() {
    if (!inquiryModal) return;
    inquiryModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!inquiryModal) return;
    inquiryModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiryName').value.trim();
      const division = document.getElementById('inquiryDivision').value;
      const notes = document.getElementById('inquiryNotes').value.trim();

      const waNumber = '6282385149355';
      const divisionLabelMap = {
        'clothing': 'Narinde Clothing (Konveksi & Kaos Mulai Rp 50rb)',
        'digital': 'Narinde Digital (AppSheet & Spreadsheet Mulai Rp 500rb)',
        'farm': 'Narinde Farm (Kerjasama Agribisnis - Segera Hadir)',
        'konsolidasi': 'Kemitraan Korporasi / Kerjasama Terpadu'
      };

      const selectedLabel = divisionLabelMap[division] || 'Narinde Group Enterprise';

      const waMessage = `Halo Tim Narinde Group! 👋%0A%0A` +
        `Saya tertarik berkonsultasi mengenai layanan Anda:%0A` +
        `• Nama / Instansi: *${name}*%0A` +
        `• Unit Bisnis Tujuan: *${selectedLabel}*%0A` +
        `• Kebutuhan / Pesan:%0A"${notes}"%0A%0A` +
        `Mohon informasi lebih lanjut dan proposal penawarannya. Terima kasih!`;

      closeModal();
      window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
    });
  }

  // ================= 7. FAQ ACCORDION =================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

});
