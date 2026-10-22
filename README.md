# Meu Aniversário — Pool Party & Luau

Projeto pessoal criado para o convite digital do aniversário de 30 anos da Marina. O repositório registra o início dos estudos de desenvolvimento web e a evolução gradual do site.

## Tecnologias

- HTML5 semântico
- CSS3 com layout responsivo
- JavaScript puro
- Google Fonts
- Mapa incorporado do Google Maps

## Estado atual

A página pública mantém a proposta visual original do convite. O HTML, os estilos e os comportamentos de JavaScript foram separados para facilitar a manutenção.

**Importante:** o formulário de confirmação ainda não grava nem envia respostas. A mensagem na página informa isso explicitamente. O evento original ocorreu em 8 de março de 2025; a contagem regressiva foi ajustada para não afirmar que o evento ainda vai acontecer.

## Próximas etapas planejadas

1. Validar a refatoração de HTML, CSS e JavaScript.
2. Definir e configurar o Supabase para autenticação e banco de dados.
3. Criar regras de acesso para que convidados possam registrar confirmações, mas apenas a conta administrativa autorizada possa consultar e gerenciar a lista.
4. Construir o painel administrativo com login, totais, busca, edição e exclusão.
5. Testar os fluxos de convidado e administrador antes de publicar qualquer alteração.

## Segurança

- Nunca coloque senha de administrador, chave secreta ou chave `service_role` no código do site.
- As permissões precisam ser aplicadas no banco de dados, não apenas escondendo telas no navegador.
- Não use dados reais de convidados em testes públicos.
- O mapa e as informações do evento são visíveis porque este é um repositório público; revise-os antes de divulgar o projeto como portfólio.

## Fluxo de desenvolvimento

As melhorias estão sendo feitas na branch `evolucao-projeto`. A branch `main` e o backup `backup-original-2026-10-21` são referências de segurança. Nenhuma mudança deve ser publicada em `main` sem aprovação explícita da autora.
