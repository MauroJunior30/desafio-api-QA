it('Login com sucesso', () => {
    const payload = {
      email: "email@teste.com.br",
      password: "testeQA!@#$%987"
    }

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: payload,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(200)

      expect(response.body.message).to.eq('Login realizado com sucesso')

    })
})