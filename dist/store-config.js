(function () {
  'use strict';

  const products = [
    {
      slug: 'classic',
      name: 'Sanda Classic',
      shortName: 'Classic',
      code: 'MODELO 01 · SANDA BRASIL',
      description: 'O clássico em couro preto.',
      imageAlt: 'Sanda Classic com pulseira preta',
      images: ['assets/sanda-classic.webp'],
      price: 899,
      checkoutUrl: 'https://sanda-brasil.pay.yampi.com.br/r/J04KTX1Z9G'
    },
    {
      slug: 'signature',
      name: 'Sanda Signature',
      shortName: 'Signature',
      code: 'MODELO 02 · SANDA BRASIL',
      description: 'O equilíbrio do couro marrom.',
      imageAlt: 'Sanda Signature com pulseira marrom',
      images: ['assets/sanda-signature.webp'],
      price: 949,
      checkoutUrl: 'https://sanda-brasil.pay.yampi.com.br/r/37NE7BRJKB'
    },
    {
      slug: 'edition',
      name: 'Sanda Edition',
      shortName: 'Edition',
      code: 'MODELO 03 · SANDA BRASIL',
      description: 'A expressão do aço prateado.',
      imageAlt: 'Sanda Edition com pulseira em aço prateado',
      images: ['assets/sanda-edition.webp'],
      price: 1099,
      checkoutUrl: 'https://sanda-brasil.pay.yampi.com.br/r/6DI4WBX8G1'
    }
  ];

  const trackingParameters = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gclid',
    'fbclid'
  ];

  function formatPrice(value) {
    if (typeof value !== 'number') return 'Preço em definição';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  function buildCheckoutUrl(checkoutUrl) {
    if (!checkoutUrl) return null;

    try {
      const target = new URL(checkoutUrl);
      if (target.protocol !== 'https:') return null;

      const currentParameters = new URLSearchParams(window.location.search);
      trackingParameters.forEach((parameter) => {
        const value = currentParameters.get(parameter);
        if (value && !target.searchParams.has(parameter)) {
          target.searchParams.set(parameter, value);
        }
      });

      return target.toString();
    } catch (_error) {
      return null;
    }
  }

  window.SANDA_STORE = Object.freeze({
    products: Object.freeze(products.map((product) => Object.freeze(product))),
    formatPrice,
    buildCheckoutUrl
  });
})();
