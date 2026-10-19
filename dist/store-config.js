(function () {
  'use strict';

  // Fotos de estilo de vida disponíveis hoje mostram o modelo Classic.
  const universeImages = [
    { src: '/assets/book-01.webp', title: 'Presença no pulso', text: 'Discreto no gesto, marcante no detalhe.' },
    { src: '/assets/book-03.webp', title: 'Do escritório ao jantar', text: 'Um desenho que acompanha o dia inteiro.' },
    { src: '/assets/hero-editorial.webp', title: 'Alfaiataria em foco', text: 'Feito para combinar com o que você já veste.' },
    { src: '/assets/book-02.webp', title: 'Sobre a mesa', text: 'Linhas retas e acabamento polido.' }
  ];

  const products = [
    {
      slug: 'classic',
      name: 'Sanda Classic',
      shortName: 'Classic',
      number: '01',
      code: 'MODELO 01 · SANDA BRASIL',
      tagline: 'Couro preto · edição de lançamento',
      description: 'O clássico em couro preto.',
      heroText: 'Caixa retangular em aço polido, mostrador com algarismos romanos e pulseira em couro preto.',
      imageAlt: 'Sanda Classic com pulseira preta',
      images: ['/assets/sanda-classic.webp', '/assets/book-04.webp', '/assets/book-02.webp'],
      backImage: '/assets/book-02.webp',
      video: '/assets/hero-film.mp4',
      strap: 'Couro preto',
      editorialTitle: 'A elegância não pede licença.',
      editorialText: 'O Classic foi pensado para acompanhar o gesto cotidiano com discrição e presença. Uma escolha atemporal para quem entende que estilo está nos detalhes.',
      strapDetail: 'Pulseira em couro preto com textura granulada, macia no pulso desde o primeiro uso.',
      universeTitle: 'O clássico, no seu ritmo.',
      universeText: 'Da primeira reunião ao último brinde. Um relógio para acompanhar o dia inteiro sem pedir atenção, só presença.',
      universeNote: '',
      price: 899,
      checkoutUrl: 'https://sanda-brasil.pay.yampi.com.br/r/J04KTX1Z9G'
    },
    {
      slug: 'signature',
      name: 'Sanda Signature',
      shortName: 'Signature',
      number: '02',
      code: 'MODELO 02 · SANDA BRASIL',
      tagline: 'Couro marrom · edição de lançamento',
      description: 'O equilíbrio do couro marrom.',
      heroText: 'O mesmo desenho retangular, agora com o calor do couro marrom.',
      imageAlt: 'Sanda Signature com pulseira marrom',
      images: ['/assets/sanda-signature.webp'],
      backImage: '',
      video: '',
      strap: 'Couro marrom',
      editorialTitle: 'Presença em seu próprio ritmo.',
      editorialText: 'O Signature combina calor, textura e sobriedade em um desenho versátil. Feito para transitar entre compromissos sem abrir mão da personalidade.',
      strapDetail: 'Pulseira em couro marrom com acabamento texturizado, que traz calor ao desenho.',
      universeTitle: 'Um universo, três expressões.',
      universeText: 'O Signature divide com toda a coleção o desenho retangular e o mostrador clássico. Muda a pulseira, fica a presença.',
      universeNote: 'Imagens do universo Sanda com o modelo Classic.',
      price: 949,
      checkoutUrl: 'https://sanda-brasil.pay.yampi.com.br/r/37NE7BRJKB'
    },
    {
      slug: 'edition',
      name: 'Sanda Edition',
      shortName: 'Edition',
      number: '03',
      code: 'MODELO 03 · SANDA BRASIL',
      tagline: 'Aço prateado · edição de lançamento',
      description: 'A expressão do aço prateado.',
      heroText: 'Caixa e pulseira em aço prateado para um visual inteiro em metal.',
      imageAlt: 'Sanda Edition com pulseira em aço prateado',
      images: ['/assets/sanda-edition.webp'],
      backImage: '',
      video: '',
      strap: 'Aço prateado',
      editorialTitle: 'O tempo ganha outra presença.',
      editorialText: 'O Edition traduz a força do aço em uma composição limpa e marcante. Um relógio que se destaca sem precisar exagerar.',
      strapDetail: 'Pulseira em elos de aço prateado, no mesmo tom da caixa, para um visual inteiro em metal.',
      universeTitle: 'Um universo, três expressões.',
      universeText: 'O Edition leva o desenho da coleção para o metal. Muda a pulseira, fica a presença.',
      universeNote: 'Imagens do universo Sanda com o modelo Classic.',
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
    universeImages: Object.freeze(universeImages),
    formatPrice,
    buildCheckoutUrl
  });
})();
