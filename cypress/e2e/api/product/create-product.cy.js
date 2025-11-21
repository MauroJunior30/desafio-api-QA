it('Criar um produto', () => {

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: "email@teste.com.br",
        password: "testeQA!@#$%987"
      }
    }).then((loginResponse) => {

      expect(loginResponse.status).to.eq(200)
      const token = loginResponse.body.authorization

      const payload = {
        nome: `Produto Teste ${Date.now()}`,
        preco: 110,
        descricao: "Teste",
        quantidade: 35
      }

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
          Authorization: token
        },
        body: payload
      }).then((produtoResponse) => {

            expect(produtoResponse.status).to.eq(201)
            expect(produtoResponse.body.message).to.eq("Cadastro realizado com sucesso")
        })
    })
})