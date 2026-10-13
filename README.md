# 5 mais acertadas e 5 mais erradas do ENEM 2025

Página de captura da VemMED para solicitar acesso ao aplicativo sobre as questões mais e menos acertadas do ENEM 2025, desenvolvida com Astro.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:4321` no navegador.

## Build

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Integração com Bubble

O cadastro envia um POST JSON para:
`https://plano-milhoes-25.bubbleapps.io/api/1.1/wf/parceiros`.

Campos enviados: `nome`, `sobrenome`, `email`, `celular` (somente dígitos) e `produto` (nome desta isca).
O campo `parceiro` não é enviado.

O formulário valida os dados, aguarda a confirmação do Bubble e continua o envio e o redirecionamento configurados no Mautic. Em caso de erro do Bubble, apresenta uma mensagem e permite nova tentativa.
O endpoint precisa aceitar esses campos sem autenticação, pois não há token privado no navegador.

Testes locais, com as requisições externas simuladas:
```bash
node --test tests/bubble-form.test.js
```

Os testes não criam cadastros no Bubble. O recebimento real e o redirecionamento precisam ser conferidos com um cadastro autorizado e nas configurações do Mautic/Bubble.


O conteúdo das questões fica separado em `src/data/enem-questoes.ts` e aguarda os dados validados. A integração do formulário ainda não está configurada.
