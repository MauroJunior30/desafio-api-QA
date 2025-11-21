it('Criar um usuário com e-mail duplicado', () => {
    const payload = {
      nome: "Usuario Teste 20",
      email: "email@teste.com.br",
      password: "testeQA!@#$%987",
      administrador: "true"
    }

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: payload,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400)

      expect(response.body.message).to.eq('Este email já está sendo usado')

    })
})