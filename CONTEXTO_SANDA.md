# Sanda Brasil: contexto completo do projeto

Documento de continuidade e entrega. Estado em 29 de setembro de 2026.

## Objetivo e direção criativa

Criar uma loja de relógios Sanda Brasil com estética premium, inspirada na estrutura editorial da H. Moser & Cie (https://h-moser.com/en). A referência orientou hierarquia, proporções e comportamento visual; a marca, os textos e as imagens foram adaptados para Sanda. A proposta combina alfaiataria, suit & tie, quiet luxury, foco no punho e presença do relógio. Não é uma reprodução integral validada lado a lado da referência.

Site publicado: https://sanda-brasil.gepetancio.chatgpt.site

## Decisões aprovadas durante a construção

1. A tipografia passou por alternativas até a escolha explícita do usuário pela fonte Bentham do Google Fonts. Bentham é usada nos títulos, com DM Sans nos textos e controles.
2. O cabeçalho começa transparente sobre o hero. Ao receber mouse ou foco, fica branco, o texto fica preto e a mesma logo é invertida por filtro CSS.
3. Ao descer a página, o cabeçalho se oculta; ao subir, reaparece. No início e com o menu mobile aberto, permanece visível.
4. A logo foi preparada como PNG transparente, permitindo a inversão sem um retângulo de fundo.
5. A coleção contém três modelos. A seleção atualiza o módulo de compra logo abaixo, evitando exigir uma nova página para escolher o produto.
6. O resumo do pedido inclui o modelo selecionado e porta relógio em veludo. A frase escolhida foi: “Um lugar à altura dos momentos que ele vai guardar.”
7. O resumo e os detalhes de pagamento usam preto e tons neutros, conforme solicitado, substituindo o destaque verde.
8. A seção final foi redesenhada com fundo editorial desfocado, título central, formulário arredondado e rodapé escuro, mantendo a identidade Sanda.
9. As três fotos de produto enviadas foram vinculadas aos modelos corretos na coleção, na compra e nas páginas de detalhes.

## Estrutura final da página inicial

| Ordem | Seção | Conteúdo |
| --- | --- | --- |
| 1 | Hero | Vídeo editorial de alfaiataria, marca, título “O tempo tem presença.” e CTA para coleção |
| 2 | Estúdio | Vídeo de apresentação do relógio e texto sobre o universo Sanda |
| 3 | Coleção | Classic, Signature e Edition em três cartões |
| 4 | Compra direta | Foto ampliável, seleção sincronizada, preço provisório, botão de compra, link de especificações, resumo do pedido, garantia, entrega e pagamentos |
| 5 | Book | Duas fotos empilhadas à esquerda, um vídeo central e duas fotos empilhadas à direita no desktop |
| 6 | Nossa história | Fotografia editorial e texto fictício sobre a marca |
| 7 | Universo Sanda | Newsletter com “Faça parte”, seguida pelo rodapé |

## Modelos e imagens

| Modelo | Identificação informada | Arquivo final |
| --- | --- | --- |
| Sanda Classic | Pulseira preta | `dist/assets/sanda-classic.webp` |
| Sanda Signature | Pulseira marrom | `dist/assets/sanda-signature.webp` |
| Sanda Edition | Prata em aço | `dist/assets/sanda-edition.webp` |

As imagens foram convertidas para WebP. Cada modelo tem uma fotografia no catálogo atual. As setas e indicadores da galeria ficam ocultos quando existe apenas uma imagem. As fotos editoriais do hero, estúdio e book são assets de conceito separados das fotos de produto.

## Sistema visual

| Token | Valor |
| --- | --- |
| Preto principal | `#090909` |
| Branco | `#ffffff` |
| Papel | `#f1f0ed` |
| Texto secundário | `#767676` |
| Divisórias | `#d9d8d4` |
| Títulos | Bentham, peso 400 |
| Textos | DM Sans, pesos 300 a 700 |
| Container principal máximo | 1600px |
| Margem lateral fluida | `clamp(20px, 3.4vw, 60px)` |

Títulos variam com `clamp`: hero aproximadamente 60 a 100px no desktop, estúdio 49 a 82px, títulos de seção 43 a 70px. O hero tem altura de viewport com limites; mídias preenchem áreas editoriais com `object-fit: cover`, enquanto fotos de produto usam `contain`.

Breakpoints reais da página inicial: 1100px, 767px e 420px. A página de produto tem breakpoint em 750px e container de 1280px. A estrutura adapta o catálogo para uma coluna no mobile, empilha imagem e compra e reorganiza o book. As larguras solicitadas originalmente foram 360px, 768px, 1280px e 1440px; este documento não afirma uma nova auditoria visual em todas elas.

## Comportamentos implementados

* Seleção de modelo pelos cartões ou botões da compra, atualizando foto, título, descrição, resumo do pedido, estado visual e link da ficha técnica.
* URLs `index.html?modelo=classic#comprar`, `index.html?modelo=signature#comprar` e `index.html?modelo=edition#comprar` para abrir cada seleção.
* Fichas em `produto.html?modelo=classic`, `signature` ou `edition`, com imagem e conteúdo conforme o parâmetro; modelo inválido usa Classic.
* Ampliação da imagem com diálogo nativo.
* Menu mobile, navegação por âncoras e rolagem suave.
* Animações leves no cabeçalho, botões e zoom dos cartões.
* Respeito a `prefers-reduced-motion`, reduzindo transições, desativando rolagem suave e pausando os vídeos.
* HTML com seções semânticas, textos alternativos, rótulos de controles, foco visível e mensagens com `aria-live`.
* Imagens secundárias com carregamento tardio. Nem todas as imagens têm lazy loading, pois as principais aparecem imediatamente.

## Stack e arquivos

HTML, CSS e JavaScript puro. CSS e JavaScript estão dentro dos HTML. Não há React, Vite, Tailwind, instalação npm ou etapa de build obrigatória. Fontes são carregadas por Google Fonts e dependem de internet.

```text
sanda-brasil/
  README.md
  CONTEXTO_SANDA.md
  dist/
    index.html
    produto.html
    store-config.js
    assets/
      sanda-logo-transparente.png
      sanda-classic.webp
      sanda-signature.webp
      sanda-edition.webp
      relogio-sanda.webp
      hero-editorial.webp
      studio-editorial.webp
      book-01.webp
      book-02.webp
      book-03.webp
      book-04.webp
      hero-film.mp4
      studio-film.mp4
      book-film.mp4
```

## Executar e hospedar

Extraia o ZIP, entre na pasta `sanda-brasil` e execute:

```bash
python3 -m http.server 8080 --directory dist
```

No Windows, se necessário, use `py` no lugar de `python3`. Abra http://localhost:8080. Para hospedagem estática, publique o conteúdo de `dist`, preservando a pasta `assets` junto dos dois HTML. O ZIP é portátil e não contém credenciais, histórico Git ou arquivos internos de publicação.

## Onde editar

* Conteúdo, tokens e layout da home: `dist/index.html`.
* Produtos, preços e links diretos de checkout da Yampi: `dist/store-config.js`.
* Fichas dos modelos: HTML e renderização em `dist/produto.html`, consumindo o mesmo catálogo compartilhado.
* Mídias e logo: `dist/assets`.
* Para ativar compras, preencher `price` e `checkoutUrl` de cada produto em `dist/store-config.js`. O botão aceita somente URL HTTPS, usa o link direto do produto na Yampi e repassa UTMs, `gclid` e `fbclid` recebidos pelo site.
* Para ampliar a galeria, incluir novos caminhos no array `images` de cada modelo.

## Estado real e pendências

O site é uma apresentação funcional com seleção de produtos, porém a operação comercial ainda não está integrada.

* Preços, medidas da caixa, materiais específicos, movimento, condições de garantia e prazo de entrega aguardam confirmação.
* `checkoutUrl` e `price` estão `null` nos três produtos em `dist/store-config.js`. Os botões da home e das fichas ficam indisponíveis até o cadastro na Yampi.
* Pix, Visa, Mastercard e Elo são indicativos visuais sujeitos à confirmação, sem gateway ativo.
* Newsletter é demonstrativa: exibe uma mensagem e não armazena nem envia o endereço digitado.
* Links de contato, atendimento e privacidade ainda são âncoras provisórias. Criar páginas e canais reais antes do lançamento.
* A ficha técnica já tem uma página base por modelo, mas o detalhamento final ainda precisa ser preenchido.
* Os três MP4 foram montados com movimento de câmera sobre fotografias. Não mostram movimento real dos ponteiros. Trocar pelos vídeos finais de produção quando disponíveis.
* Os textos institucionais são fictícios. Revisar narrativa, dados e promessas da marca.
* Confirmar operacionalmente o envio do porta relógio em veludo incluído no resumo.
* A página de produto possui uma caixa de aviso com tons levemente esverdeados no CSS (`#cbd8d7` e `#f6f9f8`); a alteração para preto solicitada foi aplicada aos componentes da compra na home.
* Algumas cores e espaços permanecem literais no CSS, além dos tokens principais. Uma revisão futura pode centralizar todos eles.

## Verificação na última alteração

Foram conferidos os caminhos locais de mídia das duas páginas e a sintaxe do JavaScript. As fotos específicas substituíram os placeholders do catálogo e da ficha de produto. A atualização foi publicada com sucesso. Não há suíte automatizada incluída nesta entrega.

## Orientação para continuar em outro assistente

Leia este documento e os dois HTML antes de alterar o projeto. Preserve a identidade Sanda, a fonte Bentham, a paleta neutra e o cabeçalho com inversão e ocultação por scroll. Preserve a relação entre coleção, compra e ficha do mesmo modelo. Não invente especificações técnicas, preços ou condições comerciais. Use as fotos fornecidas para cada modelo sem trocar suas identidades. Priorize a finalização da compra, vídeos reais, ficha técnica e integração de newsletter, mantendo a experiência premium já aprovada.
