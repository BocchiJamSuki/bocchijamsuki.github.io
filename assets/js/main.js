/* Bocchi Jam — language switching, navigation, reveal on scroll, guestbook. */
(function () {
  'use strict';

  // Guestbook (Giscus). After enabling Discussions, copy data-repo-id and
  // data-category-id from https://giscus.app into the two empty fields below.
  // Until both are filled in, the guestbook shows a short "opening soon" note.
  const GISCUS = {
    repo: 'BocchiJamSuki/BocchiJamSuki.github.io',
    repoId: '',
    category: 'Guestbook',
    categoryId: '',
    term: 'guestbook'
  };
  const GISCUS_ORIGIN = 'https://giscus.app';

  const LANGS = window.SITE_LANGS;
  const I18N = window.SITE_I18N;
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'lang';

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const byId = (id) => document.getElementById(id);

  let lang = DEFAULT_LANG;

  /* ---------- Translation ---------- */

  const isSupported = (code) => LANGS.some((l) => l.code === code);

  function readSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return isSupported(saved) ? saved : null;
    } catch (e) {
      return null;
    }
  }

  function saveLang(code) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      /* Storage can be unavailable (private mode); the choice just won't persist. */
    }
  }

  const lookup = (dict, key) =>
    key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict);

  function t(key) {
    let value = lookup(I18N[lang], key);
    if (value === undefined) value = lookup(I18N[DEFAULT_LANG], key);
    if (value === undefined) {
      console.warn('Missing translation:', key);
      return '';
    }
    return typeof value === 'string' ? value.replace('{year}', String(new Date().getFullYear())) : value;
  }

  function renderList(list, items) {
    const nodes = (items || []).map((item) => {
      const data = typeof item === 'string' ? { t: item } : item;
      const li = document.createElement('li');
      const title = document.createElement('span');
      title.className = 'item-title';
      title.textContent = data.t;
      if (data.lang) title.lang = data.lang;
      li.append(title);
      if (data.sub) {
        const sub = document.createElement('span');
        sub.className = 'item-sub';
        sub.textContent = data.sub;
        if (data.subLang) sub.lang = data.subLang;
        li.append(sub);
      }
      return li;
    });
    list.replaceChildren(...nodes);
  }

  // Each phrase stays on one line when it fits, so lines only break between phrases.
  function renderPhrases(el, phrases) {
    const nodes = (phrases || []).map((text) => {
      const span = document.createElement('span');
      span.className = 'phrase';
      span.textContent = text;
      return span;
    });
    el.replaceChildren(...nodes);
  }

  function applyLanguage(code) {
    lang = code;
    root.lang = code;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        el.setAttribute(attr, t(key));
      });
    });
    document.querySelectorAll('[data-i18n-list]').forEach((el) => {
      renderList(el, t(el.dataset.i18nList));
    });
    document.querySelectorAll('[data-i18n-phrases]').forEach((el) => {
      renderPhrases(el, t(el.dataset.i18nPhrases));
    });

    document.title = t('meta.title');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t('meta.description');

    updateLangButton();
    updateMenuButton();
    resetCopyButton();
    syncGiscusLang();
  }

  function setLanguage(code) {
    if (!isSupported(code)) return;
    saveLang(code);
    if (code !== lang) applyLanguage(code);
  }

  /* ---------- Language menu ---------- */

  const langBtn = byId('lang-btn');
  const langMenu = byId('lang-menu');
  const langShort = byId('lang-short');
  const langLabel = byId('lang-label');
  const CHECK_ICON =
    '<svg class="lang-check" viewBox="0 0 14 14" aria-hidden="true" focusable="false">' +
    '<path d="M2.5 7.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const langOptions = LANGS.map((l) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'none');
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'lang-option';
    option.setAttribute('role', 'menuitemradio');
    option.tabIndex = -1;
    option.lang = l.code;
    option.dataset.lang = l.code;
    option.innerHTML = CHECK_ICON;
    const name = document.createElement('span');
    name.textContent = l.name;
    option.append(name);
    li.append(option);
    langMenu.append(li);
    return option;
  });

  function updateLangButton() {
    const current = LANGS.find((l) => l.code === lang);
    langShort.textContent = current.short;
    langShort.lang = current.code;
    langLabel.textContent = t('lang.button').replace('{name}', current.name);
    langOptions.forEach((option) => {
      option.setAttribute('aria-checked', String(option.dataset.lang === lang));
    });
  }

  function onPointerDownOutside(event) {
    if (!langMenu.contains(event.target) && !langBtn.contains(event.target)) closeLangMenu(false);
  }

  function openLangMenu(focusIndex) {
    langMenu.hidden = false;
    langBtn.setAttribute('aria-expanded', 'true');
    const index = focusIndex !== undefined ? focusIndex : langOptions.findIndex((o) => o.dataset.lang === lang);
    langOptions[Math.max(index, 0)].focus();
    document.addEventListener('pointerdown', onPointerDownOutside, true);
  }

  function closeLangMenu(returnFocus) {
    if (langMenu.hidden) return;
    langMenu.hidden = true;
    langBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('pointerdown', onPointerDownOutside, true);
    if (returnFocus) langBtn.focus();
  }

  langBtn.addEventListener('click', () => {
    if (langMenu.hidden) openLangMenu();
    else closeLangMenu(true);
  });

  langBtn.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openLangMenu(0);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openLangMenu(langOptions.length - 1);
    }
  });

  langMenu.addEventListener('keydown', (event) => {
    const index = langOptions.indexOf(document.activeElement);
    const focusAt = (i) => langOptions[(i + langOptions.length) % langOptions.length].focus();
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusAt(index + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        focusAt(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusAt(0);
        break;
      case 'End':
        event.preventDefault();
        focusAt(langOptions.length - 1);
        break;
      case 'Escape':
        event.preventDefault();
        closeLangMenu(true);
        break;
      case 'Tab':
        closeLangMenu(false);
        break;
    }
  });

  langOptions.forEach((option) => {
    option.addEventListener('click', () => {
      setLanguage(option.dataset.lang);
      closeLangMenu(true);
    });
  });

  /* ---------- Navigation ---------- */

  const nav = byId('nav');
  const navMenu = byId('nav-menu');
  const menuBtn = byId('menu-btn');
  const main = byId('main');
  const footer = byId('footer');
  const wideScreen = window.matchMedia('(min-width: 735px)');
  const isMenuOpen = () => root.classList.contains('menu-open');

  function updateMenuButton() {
    menuBtn.setAttribute('aria-label', t(isMenuOpen() ? 'nav.close' : 'nav.open'));
  }

  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    // Keep keyboard focus inside the open menu on small screens.
    main.inert = open;
    footer.inert = open;
    updateMenuButton();
    if (open) {
      const firstLink = navMenu.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  }

  menuBtn.addEventListener('click', () => setMenu(!isMenuOpen()));

  navMenu.addEventListener('click', (event) => {
    if (event.target.closest('a') && isMenuOpen()) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.key !== 'Escape' || !isMenuOpen()) return;
    setMenu(false);
    menuBtn.focus();
  });

  wideScreen.addEventListener('change', (event) => {
    if (event.matches && isMenuOpen()) setMenu(false);
  });

  // Hairline under the bar once the page scrolls.
  const updateNavShadow = () => nav.classList.toggle('is-scrolled', window.scrollY > 2);
  window.addEventListener('scroll', updateNavShadow, { passive: true });
  updateNavShadow();

  // Mark the nav link for the section in the middle of the viewport.
  function setupScrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    const links = Array.from(navMenu.querySelectorAll('a[href^="#"]'));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = '#' + entry.target.id;
          links.forEach((a) => {
            if (a.getAttribute('href') === id) a.setAttribute('aria-current', 'location');
            else a.removeAttribute('aria-current');
          });
        });
      },
      { rootMargin: '-45% 0px -54% 0px' }
    );
    document.querySelectorAll('main > section[id]').forEach((section) => spy.observe(section));
  }

  /* ---------- Reveal on scroll ---------- */

  function setupReveal() {
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
    root.classList.add('reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
  }

  /* ---------- Guestbook ---------- */

  const giscusHost = byId('giscus');
  let giscusSynced = false;

  function giscusTheme() {
    // The custom theme must be reachable by giscus.app, so it is only used once
    // the site is served over HTTPS (GitHub Pages). Local previews use "light".
    return location.protocol === 'https:' ? new URL('assets/css/giscus.css', location.href).href : 'light';
  }

  function loadGiscus() {
    const script = document.createElement('script');
    const attributes = {
      src: GISCUS_ORIGIN + '/client.js',
      'data-repo': GISCUS.repo,
      'data-repo-id': GISCUS.repoId,
      'data-category': GISCUS.category,
      'data-category-id': GISCUS.categoryId,
      'data-mapping': 'specific',
      'data-term': GISCUS.term,
      'data-strict': '1',
      'data-reactions-enabled': '0',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': giscusTheme(),
      'data-lang': lang,
      'data-loading': 'lazy',
      crossorigin: 'anonymous'
    };
    Object.keys(attributes).forEach((name) => script.setAttribute(name, attributes[name]));
    script.async = true;
    giscusHost.append(script);
  }

  function syncGiscusLang() {
    const frame = document.querySelector('iframe.giscus-frame');
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage({ giscus: { setConfig: { lang } } }, GISCUS_ORIGIN);
  }

  function setupGiscus() {
    if (!GISCUS.repoId || !GISCUS.categoryId) {
      byId('guestbook-pending').hidden = false;
      return;
    }
    // If the language changed while the frame was loading, correct it on its first message.
    window.addEventListener('message', (event) => {
      if (event.origin !== GISCUS_ORIGIN || giscusSynced) return;
      giscusSynced = true;
      syncGiscusLang();
    });
    if (!('IntersectionObserver' in window)) {
      loadGiscus();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        loadGiscus();
      },
      { rootMargin: '800px 0px' }
    );
    observer.observe(giscusHost);
  }

  /* ---------- Copy email ---------- */

  const copyBtn = byId('copy-email');
  const copyStatus = byId('copy-status');
  let copyTimer = 0;

  function legacyCopy(text) {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    field.remove();
    return ok;
  }

  function resetCopyButton() {
    clearTimeout(copyTimer);
    copyBtn.classList.remove('is-done');
    copyBtn.querySelector('[data-i18n]').textContent = t('contact.copy');
    copyStatus.textContent = '';
  }

  copyBtn.addEventListener('click', async () => {
    const text = copyBtn.dataset.copy;
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (e) {
      ok = legacyCopy(text);
    }
    if (!ok) return;
    copyBtn.classList.add('is-done');
    copyBtn.querySelector('[data-i18n]').textContent = t('contact.copied');
    copyStatus.textContent = t('contact.copied');
    clearTimeout(copyTimer);
    copyTimer = setTimeout(resetCopyButton, 2000);
  });

  /* ---------- Start ---------- */

  try {
    applyLanguage(readSavedLang() || DEFAULT_LANG);
    setupReveal();
    setupScrollSpy();
    setupGiscus();
  } finally {
    root.classList.add('is-ready');
  }
})();
