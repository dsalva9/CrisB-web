import './style.css';
import { translations } from './translations.js';

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. SCROLLED HEADER STATE
     ========================================================================== */
  const header = document.getElementById('main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once in case page starts scrolled

  /* ==========================================================================
     2. MOBILE MENU OVERLAY & NAVIGATION
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  const toggleMobileMenu = () => {
    menuToggle.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
  };
  
  const closeMobileMenu = () => {
    menuToggle.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  menuToggle.addEventListener('click', toggleMobileMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ==========================================================================
     3. CLIENT-SIDE INTERNATIONALIZATION (i18n) LOGIC
     ========================================================================== */
  const activeLangSpan = document.getElementById('active-lang');
  const langOptions = document.querySelectorAll('.lang-option');
  const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
  const translatableElements = document.querySelectorAll('[data-i18n]');
  
  const supportedLanguages = ['es', 'ca', 'en', 'it', 'de'];
  
  // Set preferred language from cache, browser detection, or default to Spanish
  const getPreferredLanguage = () => {
    const cached = localStorage.getItem('preferred-language');
    if (cached && supportedLanguages.includes(cached)) {
      return cached;
    }
    
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (supportedLanguages.includes(browserLang)) {
      return browserLang;
    }
    
    return 'es'; // Default fallback
  };

  const updateLanguage = (lang) => {
    // 1. Cache the language selection
    localStorage.setItem('preferred-language', lang);
    
    // 2. Update active states in desktop dropdown UI
    langOptions.forEach(opt => {
      if (opt.dataset.lang === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
    
    // 3. Update active states in mobile quick-select row
    mobileLangBtns.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // 4. Update the desktop active language code display (e.g. ES, CA, EN)
    if (activeLangSpan) {
      activeLangSpan.textContent = lang.toUpperCase();
    }
    
    // 5. Swap text content for all tagged DOM elements
    translatableElements.forEach(element => {
      let key = element.dataset.i18n;
      
      // Handle placeholder translations (e.g. data-i18n="[placeholder]contact_form_message_ph")
      const isPlaceholder = key.startsWith('[placeholder]');
      if (isPlaceholder) {
        key = key.replace('[placeholder]', '');
        const text = translations[lang][key];
        if (text) {
          element.setAttribute('placeholder', text);
        }
      } else {
        // Standard innerHTML translation (to preserve quote formatting etc.)
        const text = translations[lang][key];
        if (text) {
          element.innerHTML = text;
        }
      }
    });

    // Adjust document lang attribute for accessibility/SEO engines
    document.documentElement.setAttribute('lang', lang);
  };

  // Wire up desktop language option selectors
  langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = opt.dataset.lang;
      updateLanguage(lang);
    });
  });

  // Wire up mobile language row selectors
  mobileLangBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      updateLanguage(lang);
    });
  });

  // Run initialization on startup
  const initialLang = getPreferredLanguage();
  updateLanguage(initialLang);

  /* ==========================================================================
     4. MODERN CONTACT FORM SUBMISSION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const company = document.getElementById('contact-company').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    // Disable inputs and show loading state
    contactForm.style.opacity = '0.3';
    contactForm.style.pointerEvents = 'none';
    
    // Send form data in background to FormSubmit AJAX endpoint
    fetch('https://formsubmit.co/ajax/hola@crisballester.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Nombre: name,
        Empresa: company,
        Email: email,
        Mensaje: message
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form successfully submitted:', data);
      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
      contactSuccess.style.animation = 'fadeIn 0.5s ease';
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      // Fallback to preserve visual UX
      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
    });
  });

  /* ==========================================================================
     5. DYNAMIC INTERSECTION OBSERVER FOR ACTIVE NAV LINKS
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main > section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.35 // Trigger when 35% of the section is visible
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });

  /* ==========================================================================
     6. LEGAL & PRIVACY GLASSMORPHIC MODALS
     ========================================================================== */
  const modalTriggers = {
    'legal-notice': document.getElementById('modal-legal'),
    'privacy-policy': document.getElementById('modal-privacidad'),
    'cookies-policy': document.getElementById('modal-cookies')
  };

  const closeAllModals = () => {
    Object.values(modalTriggers).forEach(modal => {
      if (modal) modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  };

  Object.entries(modalTriggers).forEach(([triggerId, modalEl]) => {
    const triggerEl = document.getElementById(triggerId);
    if (triggerEl && modalEl) {
      triggerEl.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllModals(); // Close other open modals
        modalEl.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      // Close trigger via exit button
      const closeBtn = modalEl.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllModals();
        });
      }

      // Close trigger via backdrop click
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          closeAllModals();
        }
      });
    }
  });

  // Close trigger via escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});

