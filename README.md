# CENÁRIOS LEVANTADOS

**1-Login**

Login com credenciais válidas

Login com senha incorreta

Login com e-mail inexistente

Login com e-mail em branco

Login com senha em branco

**2-Usuários**

Criar usuário com sucesso

Criar usuário com e-mail duplicado

Listar usuários

Consultar usuário pelo ID

Editar usuário

Excluir usuário

**3-Produtos**

Cadastrar produto com sucesso

Cadastrar produto com nome duplicado

Listar produtos

Buscar produto pelo ID

Editar produto existente

Excluir produto existente

Tentar criar produto sem campo obrigatório

Tentar excluir produto que está em um carrinho

**4-Carrinhos**

Criar carrinho com produto válido

Criar carrinho com produto inexistente

Criar carrinho com quantidade maior que o estoque

Excluir carrinho com sucesso

Listar carrinhos

Tentar criar mais de um carrinho para o mesmo usuário


# CENÁRIOS AUTOMATIZADOS

**LOGIN**

Login com sucesso

Login inválido

**USUÁRIOS**

Criar usuário

Criar usuário com e-mail duplicado

**PRODUTOS**

Criar produto

Criar produto com nome duplicado

**CARRINHOS**

Criar carrinho com produto válido

Criar carrinho com produto inexistente


# INSTRUÇÕES PARA RODAR

**Comandos para rodar cada cenário específico**

Cart: npx cypress run --spec "cypress/e2e/api/cart/nome-cenario.cy.js"

Login: npx cypress run --spec "cypress/e2e/api/login/nome-cenario.cy.js"

Product: npx cypress run --spec "cypress/e2e/api/product/nome-cenario.cy.js"

Users: npx cypress run --spec "cypress/e2e/api/users/nome-cenario.cy.js"

**Comando para rodar todos os cenários**

npx cypress run "cypress/e2e/api"