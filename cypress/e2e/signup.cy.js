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

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signup.alertMessageBeVisible(msg.output)
            })
        })

    })

    // it('Required fields', function () {

    //     var deliver = signupFactory.deliver()
    //     deliver.email = 'dernival.teste.com'

    //     signup.go()
    //     signup.submit()
    //     signup.alertMessageBeVisible('É necessário informar o nome')
    //     signup.alertMessageBeVisible('É necessário informar o CPF')
    //     signup.alertMessageBeVisible('É necessário informar o email')
    //     signup.alertMessageBeVisible('É necessário informar o CEP')
    //     signup.alertMessageBeVisible('É necessário informar o número do endereço')
    //     signup.alertMessageBeVisible('Selecione o método de entrega')
    //     signup.alertMessageBeVisible('Adicione uma foto da sua CNH')

    // });

});