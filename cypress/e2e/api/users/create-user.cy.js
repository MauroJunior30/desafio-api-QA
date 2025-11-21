it('Criar um usuário', () => {

  const payload = {
    nome: "Usuario Teste 1",
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

    if (response.status === 201) {
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    }

    else if (response.status === 400) {
      expect(response.body.message).to.eq('Este email já está sendo usado')
    }
  })
})
