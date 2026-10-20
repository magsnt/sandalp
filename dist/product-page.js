(function () {
  'use strict';

  const store = window.SANDA_STORE;
  const slug = document.body.dataset.productSlug;
  const product = store.products.find((item) => item.slug === slug) || store.products[0];
  const checkoutUrl = store.buildCheckoutUrl(product.checkoutUrl);
  const isCutout = (src) => /\/sanda-(classic|signature|edition)\.webp$/.test(src);

  const values = {
    name: product.name,
    code: product.code,
    description: product.description,
    price: store.formatPrice(product.price),
    installments: '3x de ' + store.formatPrice(product.price / 3),
    first: store.formatPrice(product.price * 0.9),
    strap: 'Pulseira em ' + product.strap.toLowerCase(),
    shortStrap: product.shortName + ' · ' + product.strap,
    lifeEyebrow: product.universeNote ? 'Universo Sanda' : 'No ritmo de quem vive',
    universeTitle: product.universeTitle,
    universeText: product.universeText,
    universeNote: product.universeNote,
    insideEyebrow: 'Por dentro do ' + product.name,
    editorialTitle: product.editorialTitle,
    editorialText: product.editorialText
  };
  document.querySelectorAll('[data-p]').forEach((element) => {
    element.textContent = values[element.dataset.p] || '';
  });
  document.title = product.name + ' | Sanda Brasil';
  document.querySelector('meta[name="description"]').content = product.name + ': ' + product.description + ' Frete grátis para todo o país, até 3x sem juros e checkout seguro.';

  // Galeria
  const stage = document.querySelector('[data-stage]');
  const thumbs = document.querySelector('[data-thumbs]');
  let current = 0;
  const show = (index) => {
    current = (index + product.images.length) % product.images.length;
    const src = product.images[current];
    stage.src = src;
    stage.alt = product.imageAlt + (current ? ' · imagem ' + (current + 1) : '');
    stage.classList.toggle('contain', isCutout(src));
    thumbs.querySelectorAll('button').forEach((button, i) => button.classList.toggle('active', i === current));
  };
  thumbs.innerHTML = product.images.map((src, i) => '<button type="button" class="' + (isCutout(src) ? 'contain' : '') + '" aria-label="Ver imagem ' + (i + 1) + '"><img src="' + src + '" alt=""></button>').join('');
  thumbs.querySelectorAll('button').forEach((button, i) => button.addEventListener('click', () => show(i)));
  document.querySelectorAll('[data-step]').forEach((button) => {
    button.hidden = product.images.length < 2;
    button.addEventListener('click', () => show(current + Number(button.dataset.step)));
  });
  thumbs.hidden = product.images.length < 2;
  show(0);

  const modal = document.querySelector('[data-modal]');
  const modalBody = document.querySelector('[data-modal-body]');
  const openModal = (html) => {
    modalBody.innerHTML = html;
    modal.showModal();
  };
  modal.addEventListener('close', () => { modalBody.innerHTML = ''; });
  document.querySelector('[data-modal-close]').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
  document.querySelector('[data-zoom]').addEventListener('click', () => openModal('<img src="' + stage.src + '" alt="' + stage.alt + '">'));

  const videoButton = document.querySelector('[data-video]');
  if (product.video) {
    videoButton.hidden = false;
    videoButton.addEventListener('click', () => openModal('<video src="' + product.video + '" autoplay controls playsinline loop></video>'));
  }

  // Modelos
  document.querySelector('[data-swatches]').innerHTML = store.products.map((item) =>
    '<a class="swatch' + (item.slug === product.slug ? ' active' : '') + '" href="' + store.url('products/' + item.slug + '/') + '"' + (item.slug === product.slug ? ' aria-current="page"' : '') + '>' +
    '<figure><img src="' + item.images[0] + '" alt="" loading="lazy"></figure><span>' + item.shortName + '</span></a>'
  ).join('');

  // Universo
  const lifeTrack = document.querySelector('[data-life-track]');
  lifeTrack.innerHTML = store.universeImages.map((item) =>
    '<figure class="lcard"><img src="' + item.src + '" alt="" loading="lazy"><figcaption><strong>' + item.title + '</strong><span>' + item.text + '</span></figcaption></figure>'
  ).join('');
  document.querySelectorAll('[data-life]').forEach((button) => button.addEventListener('click', () => {
    const card = lifeTrack.querySelector('.lcard');
    lifeTrack.scrollBy({ left: Number(button.dataset.life) * (card.offsetWidth + 14), behavior: 'smooth' });
  }));

  // Por dentro
  const tabs = [
    ['Mostrador', 'Mostrador branco com algarismos romanos, trilho de minutos e ponteiros azulados. Uma leitura clássica, limpa e fácil de reconhecer.'],
    ['Pulseira', product.strapDetail],
    ['Caixa', 'Caixa retangular em aço com acabamento polido e coroa com detalhe em azul, desenhada para um perfil discreto no pulso.'],
    ['Embalagem', 'Cada pedido acompanha um porta relógio em veludo, pensado para guardar o seu Sanda com cuidado.']
  ];
  const tabTitle = document.querySelector('[data-tab-title]');
  const tabText = document.querySelector('[data-tab-text]');
  const tabButtons = document.querySelectorAll('[data-tab]');
  const selectTab = (index) => {
    tabButtons.forEach((button, i) => button.setAttribute('aria-selected', String(i === index)));
    tabTitle.textContent = tabs[index][0];
    tabText.textContent = tabs[index][1];
  };
  tabButtons.forEach((button, i) => button.addEventListener('click', () => selectTab(i)));
  selectTab(0);

  // Checkout
  const buyButtons = document.querySelectorAll('[data-buy]');
  buyButtons.forEach((button) => {
    const label = button.textContent;
    button.dataset.label = label;
    button.href = checkoutUrl || '#';
    button.setAttribute('aria-disabled', String(!checkoutUrl));
    button.addEventListener('click', (event) => {
      if (!checkoutUrl) {
        event.preventDefault();
        return;
      }
      button.textContent = 'Abrindo checkout…';
      button.setAttribute('aria-busy', 'true');
    });
  });
  window.addEventListener('pageshow', () => {
    buyButtons.forEach((button) => {
      button.textContent = button.dataset.label;
      button.removeAttribute('aria-busy');
    });
  });

  // Barra fixa de compra
  const sticky = document.querySelector('[data-sticky]');
  const mainBuy = document.querySelector('.buy__btn');
  new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('show', !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(mainBuy);
})();
