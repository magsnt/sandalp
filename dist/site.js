(function () {
  'use strict';

  const store = window.SANDA_STORE;
  const body = document.body;
  const overlay = body.dataset.header === 'overlay';
  const offers = ['Frete grátis para todo o país', 'Até 3x sem juros', '10% OFF na primeira compra'];
  const group = (hidden) => '<div class="topbar__group"' + (hidden ? ' aria-hidden="true"' : '') + '>' + offers.map((offer) => '<span>' + offer + '</span>').join('') + '</div>';
  const modelCard = (product) => '<a href="/products/' + product.slug + '/"><figure><img src="' + product.images[0] + '" alt="" loading="lazy"></figure><strong>' + product.name + '</strong><small>' + store.formatPrice(product.price) + '</small></a>';

  const chrome = document.createElement('div');
  chrome.innerHTML =
    '<div class="topbar" aria-label="Condições especiais"><div class="topbar__track">' + group(false) + group(true) + '</div></div>' +
    '<header class="header' + (overlay ? ' header--overlay' : '') + '">' +
      '<button class="header__burger" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="drawer"><span></span><span></span><span></span></button>' +
      '<a class="header__logo" href="/" aria-label="Sanda Brasil, início"><img src="/assets/sanda-logo-transparente.png" alt="Sanda"></a>' +
      '<nav class="header__nav" aria-label="Navegação principal">' +
        '<div class="header__drop"><button type="button" aria-expanded="false">Relógios</button><div class="header__menu">' + store.products.map(modelCard).join('') + '</div></div>' +
        '<a href="/#historia">História</a><a href="/#sobre">Sobre nós</a><a href="/rastreio/">Rastreio</a>' +
      '</nav>' +
      '<div class="header__actions"><a class="header__cta" href="/#colecao">Comprar</a></div>' +
    '</header>' +
    '<nav class="drawer" id="drawer" aria-label="Menu">' +
      '<span class="eyebrow drawer__label">Relógios</span>' +
      '<div class="drawer__models">' + store.products.map((product) => '<a href="/products/' + product.slug + '/"><figure><img src="' + product.images[0] + '" alt="" loading="lazy"></figure><span>' + product.shortName + '</span></a>').join('') + '</div>' +
      '<a href="/#colecao">Coleção</a><a href="/#historia">História</a><a href="/#sobre">Sobre nós</a><a href="/rastreio/">Rastreio</a>' +
    '</nav>';
  body.prepend(...chrome.children);

  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.id = 'contato';
  footer.innerHTML =
    '<div class="footer__grid">' +
      '<div class="footer__brand"><img src="/assets/sanda-logo-transparente.png" alt="Sanda"><p>Uma expressão de elegância para todos os momentos que merecem ser lembrados.</p></div>' +
      '<div><h3>Relógios</h3>' + store.products.map((product) => '<a href="/products/' + product.slug + '/">' + product.name + '</a>').join('') + '</div>' +
      '<div><h3>Universo Sanda</h3><a href="/#historia">História</a><a href="/#sobre">Sobre nós</a><a href="/rastreio/">Rastreio</a></div>' +
      '<div><h3>Compra segura</h3><ul><li>Checkout Yampi</li><li>Frete grátis para todo o país</li><li>Até 3x sem juros</li></ul><div class="footer__pay"><span>PIX</span><span>VISA</span><span>MASTERCARD</span><span>ELO</span></div></div>' +
    '</div>' +
    '<div class="footer__bottom"><span>© ' + new Date().getFullYear() + ' Sanda Brasil · Todos os direitos reservados</span><span>O tempo tem presença.</span></div>';
  body.append(footer);

  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const drawer = document.querySelector('.drawer');
  const drop = document.querySelector('.header__drop');

  const setSolid = () => header.classList.toggle('is-solid', window.scrollY > 40 || drawer.classList.contains('open'));
  if (overlay) {
    setSolid();
    window.addEventListener('scroll', setSolid, { passive: true });
  }

  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    body.classList.toggle('no-scroll', open);
    if (overlay) setSolid();
  });
  drawer.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    drawer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
    if (overlay) setSolid();
  });

  const dropButton = drop.querySelector('button');
  dropButton.addEventListener('click', () => {
    const open = drop.classList.toggle('open');
    dropButton.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (drop.contains(event.target)) return;
    drop.classList.remove('open');
    dropButton.setAttribute('aria-expanded', 'false');
  });

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach((video) => video.pause());
  }
})();
