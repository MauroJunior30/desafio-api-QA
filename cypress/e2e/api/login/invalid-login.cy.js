it('Login inválido', () => {
    const payload = {
      email: "email20@teste.com.br",
      password: "123000"
    }

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: payload,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(401)

      expect(response.body.message).to.eq('Email e/ou senha inválidos')

    })
})