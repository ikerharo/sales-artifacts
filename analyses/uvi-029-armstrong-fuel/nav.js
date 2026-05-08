(function () {
  const script = document.currentScript;
  const active = script ? script.dataset.active || '' : '';

  const PAGES = [
    { id: 'index',     n: '00', label: 'Resumen',        href: 'index.html',         show: false },
    { id: 'gdl',       n: '01', label: 'GDL · radio',    href: '01-gdl-radio.html' },
    { id: 'colima',    n: '02', label: 'Colima → GDL',   href: '02-colima.html' },
    { id: 'vallarta',  n: '03', label: 'Vallarta → GDL', href: '03-vallarta.html' },
    { id: 'tepic',     n: '04', label: 'Tepic → GDL',    href: '04-tepic.html' },
    { id: 'leon',      n: '05', label: 'León → GDL',     href: '05-leon.html' },
    { id: 'metod',     n: '06', label: 'Método y caveats', href: '06-metodologia.html' },
  ];

  const visible = PAGES.filter(p => p.show !== false);
  const wordmarkSrc = 'assets/wordmark-black.png';

  const html = `
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="index.html">
          <img class="wm" src="${wordmarkSrc}" alt="Uvicuo" />
          <span class="x">×</span>
          <span class="client">Armstrong</span>
        </a>

        <nav class="nav" id="topnav">
          ${visible.map(p => `
            <a href="${p.href}"${p.id === active ? ' class="active"' : ''}>
              <span class="n">${p.n}</span>${p.label}
            </a>
          `).join('')}
        </nav>

        <button class="mobile-toggle" id="mobile-toggle" aria-label="Abrir secciones">
          <span>☰</span><span>Secciones</span>
        </button>

        <div class="topbar-meta">
          <span class="pulse"></span>
          <span>UV-029</span>
          <span>·</span>
          <span>FUEL</span>
          <span>·</span>
          <span>v1.0</span>
        </div>
      </div>

      <div class="mobile-nav" id="mobile-nav">
        ${visible.map(p => `
          <a href="${p.href}"${p.id === active ? ' class="active"' : ''}>
            <span class="n">${p.n}</span><span>${p.label}</span>
          </a>
        `).join('')}
      </div>
    </header>

    ${active && active !== 'index' ? `
      <div class="progress">
        <div class="progress-bar" style="width: ${((visible.findIndex(p => p.id === active) + 1) / visible.length) * 100}%"></div>
      </div>
    ` : ''}
  `;

  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.insertBefore(wrap, document.body.firstChild);
  while (wrap.firstChild) document.body.insertBefore(wrap.firstChild, wrap);
  wrap.remove();

  const toggle = document.getElementById('mobile-toggle');
  const mnav = document.getElementById('mobile-nav');
  if (toggle && mnav) {
    toggle.addEventListener('click', () => mnav.classList.toggle('open'));
    mnav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mnav.classList.remove('open'));
    });
  }

  window.__PAGES = PAGES;
  window.__ACTIVE = active;
})();
