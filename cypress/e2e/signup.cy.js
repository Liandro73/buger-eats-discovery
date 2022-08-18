import signup from '../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })

    it('User should be deliver', function () {

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

    });

    it('Incorrect document', function () {
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get("a[href='/deliver']").click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        const expectedMessage = 'Oops! CPF inválido'

        signup.go()
        signup.fillForm(this.deliver.cpf_invalido)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)

    });

});