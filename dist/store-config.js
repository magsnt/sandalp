(function () {
  'use strict';

  const scriptUrl = document.currentScript && document.currentScript.src;
  const siteRoot = scriptUrl ? new URL('.', scriptUrl) : new URL('./', window.location.href);
  const siteUrl = (path) => new URL(String(path).replace(/^\//, ''), siteRoot).toString();
  const editorial = (name) => siteUrl('assets/editorial/' + name + '.webp');

  // Fotos de estilo de vida disponíveis hoje mostram o modelo Classic.
  const universeImages = [
    { src: siteUrl('assets/book-01.webp'), title: 'Presença no pulso', text: 'Discreto no gesto, marcante no detalhe.' },
    { src: siteUrl('assets/book-03.webp'), title: 'Do escritório ao jantar', text: 'Um desenho que acompanha o dia inteiro.' },
    { src: siteUrl('assets/hero-editorial.webp'), title: 'Alfaiataria em foco', text: 'Feito para combinar com o que você já veste.' },
    { src: siteUrl('assets/book-02.webp'), title: 'Sobre a mesa', text: 'Linhas retas e acabamento polido.' }
  ];

  const products = [
    {
      slug: 'classic',
      name: 'Classic',
      shortName: 'Classic',
      code: 'Classic',
      tagline: 'Couro preto · edição de lançamento',
      description: 'O clássico em couro preto.',
      heroText: 'Caixa retangular em aço polido, mostrador com algarismos romanos e pulseira em couro preto.',
      imageAlt: 'Classic com pulseira preta',
      cutout: siteUrl('assets/sanda-classic.webp'),
      images: [siteUrl('assets/produtos/classic-1.webp'), siteUrl('assets/produtos/classic-2.webp'), siteUrl('assets/produtos/classic-3.webp'), editorial('classic-08')],
      stripImages: [editorial('classic-20'), editorial('classic-04'), editorial('classic-18'), editorial('classic-37'), editorial('classic-15'), editorial('classic-02'), editorial('classic-39')],
      caseImage: editorial('classic-08'),
      backImage: editorial('classic-04'),
      video: siteUrl('assets/hero-film.mp4'),
      strap: 'Couro preto',
      editorialTitle: 'A elegância não pede licença.',
      editorialText: 'O Classic foi pensado para acompanhar o gesto cotidiano com discrição e presença. Uma escolha atemporal para quem entende que estilo está nos detalhes.',
      strapDetail: 'Pulseira em couro preto com textura granulada, macia no pulso desde o primeiro uso.',
      universeTitle: 'O clássico, no seu ritmo.',
      universeText: 'Da primeira reunião ao último brinde. Um relógio para acompanhar o dia inteiro sem pedir atenção, só presença.',
      universeNote: '',
      universeImages: [
        { src: editorial('classic-10'), title: 'Contraste absoluto', text: 'Couro preto e linhas precisas em uma composição essencial.' },
        { src: editorial('classic-11'), title: 'Código clássico', text: 'Uma presença limpa para acompanhar a alfaiataria.' },
        { src: editorial('classic-13'), title: 'Entre luz e movimento', text: 'O Classic atravessa cenários sem perder a discrição.' },
        { src: editorial('classic-28'), title: 'Depois do último brinde', text: 'Uma assinatura que permanece do jantar ao fim da noite.' },
        { src: editorial('classic-32'), title: 'Ritmo urbano', text: 'Textura e sobriedade para os momentos cotidianos.' },
        { src: editorial('classic-33'), title: 'Presença em cena', text: 'O detalhe certo, sem disputar atenção.' },
        { src: editorial('classic-34'), title: 'No gesto', text: 'A caixa retangular encontra o couro preto.' },
        { src: editorial('classic-36'), title: 'À beira d’água', text: 'Elegância que acompanha cada deslocamento.' },
        { src: editorial('classic-38'), title: 'Pronto para partir', text: 'Um clássico pensado para diferentes ritmos.' }
      ],
      price: 447.90,
      checkoutUrl: 'https://sanda-brasil.pay.yampi.com.br/r/J04KTX1Z9G'
    },
    {
      slug: 'signature',
      name: 'Signature',
      shortName: 'Signature',
      code: 'Signature',
      tagline: 'Couro marrom · edição de lançamento',
      description: 'O equilíbrio do couro marrom.',
      heroText: 'O mesmo desenho retangular, agora com o calor do couro marrom.',
      imageAlt: 'Signature com pulseira marrom',
      cutout: siteUrl('assets/sanda-signature.webp'),
      images: [siteUrl('assets/produtos/signature-1.webp'), siteUrl('assets/produtos/signature-2.webp'), siteUrl('assets/produtos/signature-3.webp'), editorial('signature-06')],
      stripImages: [editorial('signature-30'), editorial('signature-07'), editorial('signature-31'), editorial('signature-42')],
      caseImage: editorial('signature-06'),
      backImage: editorial('signature-30'),
      video: '',
      strap: 'Couro marrom',
      editorialTitle: 'Presença em seu próprio ritmo.',
      editorialText: 'O Signature combina calor, textura e sobriedade em um desenho versátil. Feito para transitar entre compromissos sem abrir mão da personalidade.',
      strapDetail: 'Pulseira em couro marrom com acabamento texturizado, que traz calor ao desenho.',
      universeTitle: 'Um universo, três expressões.',
      universeText: 'O Signature divide com toda a coleção o desenho retangular e o mostrador clássico. Muda a pulseira, fica a presença.',
      universeNote: '',
      universeImages: [
        { src: editorial('signature-01'), title: 'Em movimento', text: 'O couro marrom em uma leitura leve e contemporânea.' },
        { src: editorial('signature-14'), title: 'Calor e textura', text: 'Tons naturais para uma presença acolhedora.' },
        { src: editorial('signature-16'), title: 'Assinatura pessoal', text: 'Uma escolha marcante vista de qualquer ângulo.' },
        { src: editorial('signature-22'), title: 'Elegância natural', text: 'Do encontro casual às ocasiões que pedem mais.' },
        { src: editorial('signature-40'), title: 'Entre compromissos', text: 'Versatilidade para acompanhar o dia inteiro.' }
      ],
      price: 447.90,
      checkoutUrl: 'https://sanda-brasil.pay.yampi.com.br/r/37NE7BRJKB'
    },
    {
      slug: 'edition',
      name: 'Steel Edition',
      shortName: 'Steel Edition',
      code: 'Steel Edition',
      tagline: 'Aço prateado · edição de lançamento',
      description: 'A expressão do aço prateado.',
      heroText: 'Caixa e pulseira em aço prateado para um visual inteiro em metal.',
      imageAlt: 'Steel Edition com pulseira em aço prateado',
      cutout: siteUrl('assets/sanda-edition.webp'),
      images: [siteUrl('assets/produtos/steel-1.webp'), siteUrl('assets/produtos/steel-2.webp'), siteUrl('assets/produtos/steel-3.webp'), editorial('steel-09')],
      stripImages: [editorial('steel-05'), editorial('steel-12'), editorial('steel-35'), editorial('steel-27'), editorial('steel-43')],
      caseImage: editorial('steel-09'),
      backImage: editorial('steel-12'),
      video: '',
      strap: 'Aço prateado',
      editorialTitle: 'O tempo ganha outra presença.',
      editorialText: 'O Steel Edition traduz a força do aço em uma composição limpa e marcante. Um relógio que se destaca sem precisar exagerar.',
      strapDetail: 'Pulseira em elos de aço prateado, no mesmo tom da caixa, para um visual inteiro em metal.',
      universeTitle: 'Um universo, três expressões.',
      universeText: 'O Steel Edition leva o desenho da coleção para o metal. Muda a pulseira, fica a presença.',
      universeNote: '',
      universeImages: [
        { src: editorial('steel-03'), title: 'Força contemporânea', text: 'A presença do aço em uma composição de moda.' },
        { src: editorial('steel-17'), title: 'Aço e alfaiataria', text: 'Um acabamento integral para ocasiões distintas.' },
        { src: editorial('steel-19'), title: 'Estratégia no detalhe', text: 'Linhas clássicas em uma leitura inteiramente metálica.' },
        { src: editorial('steel-21'), title: 'Presença formal', text: 'O brilho discreto do aço sob luz baixa.' },
        { src: editorial('steel-25'), title: 'Luz do dia', text: 'Aço polido para acompanhar momentos cotidianos.' },
        { src: editorial('steel-45'), title: 'Aço no seu ritmo', text: 'Uma expressão versátil, limpa e marcante.' }
      ],
      price: 497.90,
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
    url: siteUrl,
    formatPrice,
    buildCheckoutUrl
  });
})();
