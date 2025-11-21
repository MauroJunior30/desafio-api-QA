it('Criar um carrinho', () => {

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

      const idProduto = produtoResponse.body._id

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: {
          Authorization: token
        },
        body: {
          produtos: [
            {
              idProduto: idProduto,
              quantidade: 2
            }
          ]
        }
      }).then((carrinhoResponse) => {

        expect(carrinhoResponse.status).to.eq(201)
        expect(carrinhoResponse.body.message).to.eq("Cadastro realizado com sucesso")

        cy.request({
          method: 'DELETE',
          url: 'https://serverest.dev/carrinhos/cancelar-compra',
          headers: {
            Authorization: token
          }
        }).then((deleteResponse) => {

          expect(deleteResponse.status).to.eq(200)
          expect(deleteResponse.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido")

        })

      })
    })
  })
})
