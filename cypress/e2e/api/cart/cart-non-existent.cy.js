it('Criar carrinho com produto inexistente', () => {

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

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/carrinhos',
      failOnStatusCode: false,
      headers: {
        Authorization: token
      },
      body: {
        produtos: [
          {
            idProduto: "produtoinvalido",
            quantidade: 2
          }
        ]
      }
    }).then((carrinhoResponse) => {

      expect(carrinhoResponse.status).to.eq(400)
      expect(carrinhoResponse.body.message).to.eq("Produto não encontrado")
      expect(carrinhoResponse.body.item.idProduto).to.eq("produtoinvalido")

    })

  })

})
