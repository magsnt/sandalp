(function () {
  'use strict';

  const store = window.SANDA_STORE;
  const slug = document.body.dataset.productSlug;
  const product = store.products.find((item) => item.slug === slug) || store.products[0];
  const checkoutUrl = store.buildCheckoutUrl(product.checkoutUrl);
  const installmentValue = product.price / 3;
  const firstOrderValue = product.price * 0.9;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  document.title = product.name + ' | Sanda Brasil';
  document.querySelector('meta[name="description"]').content = product.description + ' Conheça o modelo e compre no checkout seguro da Sanda Brasil.';
  setText('[data-product-code]', product.code);
  setText('[data-product-name]', product.name);
  setText('[data-product-description]', product.description);
  setText('[data-product-price]', store.formatPrice(product.price));
  setText('[data-installment]', '3x de ' + store.formatPrice(installmentValue) + ' sem juros');
  setText('[data-first-order-price]', store.formatPrice(firstOrderValue) + ' na primeira compra');
  setText('[data-product-strap]', product.strap);
  setText('[data-editorial-title]', product.editorialTitle);
  setText('[data-editorial-text]', product.editorialText);
  setText('[data-sticky-name]', product.name);
  setText('[data-sticky-price]', store.formatPrice(product.price));
  setText('[data-year]', String(new Date().getFullYear()));

  document.querySelectorAll('[data-product-image]').forEach((image) => {
    image.src = product.images[0];
    image.alt = product.imageAlt;
  });

  const models = document.querySelector('[data-model-links]');
  models.replaceChildren(...store.products.map((item, index) => {
    const link = document.createElement('a');
    link.className = 'model-link' + (item.slug === product.slug ? ' active' : '');
    link.href = '/products/' + item.slug + '/';
    if (item.slug === product.slug) link.setAttribute('aria-current', 'page');
    link.innerHTML = '<span>Modelo 0' + (index + 1) + '</span><strong>' + item.shortName + '</strong>';
    return link;
  }));

  const related = document.querySelector('[data-related-products]');
  related.replaceChildren(...store.products.map((item) => {
    const card = document.createElement('a');
    card.className = 'related-card';
    card.href = '/products/' + item.slug + '/';
    card.innerHTML = '<div class="related-image"><img src="' + item.images[0] + '" alt="' + item.imageAlt + '" loading="lazy"></div><h3>' + item.name + '</h3><p>' + store.formatPrice(item.price) + '</p>';
    return card;
  }));

  document.querySelectorAll('[data-buy-button]').forEach((button) => {
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
    document.querySelectorAll('[data-buy-button]').forEach((button) => {
      button.textContent = 'Comprar agora';
      button.removeAttribute('aria-busy');
    });
  });

  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  mobileMenu.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });

  const zoomDialog = document.querySelector('[data-zoom-dialog]');
  document.querySelector('[data-zoom-button]').addEventListener('click', () => zoomDialog.showModal());
  document.querySelector('[data-zoom-close]').addEventListener('click', () => zoomDialog.close());
  zoomDialog.addEventListener('click', (event) => {
    if (event.target === zoomDialog) zoomDialog.close();
  });
})();
