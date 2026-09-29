# Sanda Brasil

Site estático em HTML, CSS e JavaScript puro. Abra `dist/index.html` em um servidor local.

## Estrutura

1. Hero com filme editorial de alfaiataria e relógio
2. Filme de estúdio com close do relógio
3. Coleção com três cartões provisórios
4. Módulo de compra na página inicial, selecionado pelos três cartões, com galeria, opções e ficha resumida
5. Book com duas fotos empilhadas à esquerda, vídeo central e duas fotos empilhadas à direita
6. Nossa história
7. Faça parte do universo Sanda

`dist/assets` contém a logo PNG transparente, as três fotos de produto enviadas e as cenas editoriais de apresentação. Os três MP4 desta versão foram criados com movimento de câmera sobre fotografias. Não mostram ponteiros avançando de verdade. Substitua pelos filmes finais mantendo os nomes dos arquivos ou editando os caminhos no HTML. As imagens editoriais são composições para o conceito. O catálogo usa as três fotos específicas dos modelos Classic, Signature e Edition. O formulário e os links são demonstrativos.

Fonte Bentham nos títulos e DM Sans no restante. A navegação se oculta ao descer, reaparece ao subir e inverte a cor ao receber mouse ou foco.

## Ativar compras na Yampi

Os dados comerciais ficam centralizados em `dist/store-config.js`. Depois de cadastrar cada modelo na Yampi, preencha `price` com um número e `checkoutUrl` com o **Link de compra** copiado do resumo do produto no painel da Yampi. O site aceita apenas links HTTPS, ativa automaticamente os botões da home e da ficha de produto e preserva parâmetros UTM, `gclid` e `fbclid` recebidos pela página.

Até os links serem cadastrados, o botão permanece visualmente indisponível e informa que o checkout ainda não foi ativado. Os cartões, opções e galeria usam o mesmo estado selecionado e a URL `?modelo=classic`, `signature` ou `edition` permite abrir diretamente uma seleção.

A área abaixo de Comprar agora inclui o resumo do pedido, indicativos de garantia e entrega e meios de pagamento sujeitos a confirmação. O link de especificações abre `produto.html?modelo=...`, uma página inicial para a ficha completa futura. O porta relógio em veludo foi informado pelo usuário como parte do pedido; confirmar disponibilidade operacional antes de lançar.
