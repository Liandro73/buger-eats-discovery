import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

    });

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = 'X00000141AA'

        const expectedMessage = 'Oops! CPF inválido'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)

    });

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'dernival.teste.com'

        const expectedMessage = 'Oops! Email com formato inválido.'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe(expectedMessage)

    });

});