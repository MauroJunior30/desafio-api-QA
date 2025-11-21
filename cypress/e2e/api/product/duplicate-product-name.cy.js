it('Criar um produto com nome duplicado', () => {

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

      const nomeDuplicado = `ProdutoDuplicado-${Date.now()}`

      const produto = {
        nome: nomeDuplicado,
        preco: 100,
        descricao: "Produto teste duplicado",
        quantidade: 10
      }

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: { Authorization: token },
        body: produto
      }).then((primeiraResponse) => {

        expect(primeiraResponse.status).to.eq(201)

        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/produtos',
          headers: { Authorization: token },
          body: produto,
          failOnStatusCode: false
        }).then((segundaResponse) => {

          expect(segundaResponse.status).to.eq(400)
          expect(segundaResponse.body.message).to.eq("Já existe produto com esse nome")

        })
      })

    })

  })