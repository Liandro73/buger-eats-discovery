

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get("a[href='/deliver']").click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Dernival Liandro',
            cpf: '00000000041',
            email: 'teste@teste.com',
            whatsapp: '61999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Apto 102',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        cy.get("input[name='name']").type(entregador.nome)
        cy.get("input[name='cpf']").type(entregador.cpf)
        cy.get("input[name='email']").type(entregador.email)
        cy.get("input[name='whatsapp']").type(entregador.whatsapp)

        cy.get("input[name='postalcode']").type(entregador.endereco.cep)
        cy.get("input[type=button][value='Buscar CEP']").click()

        cy.get("input[name='address-number']").type(entregador.endereco.numero)
        cy.get("input[name='address-details']").type(entregador.endereco.complemento)

        cy.get("input[name='address']").should('have.value', entregador.endereco.rua)
        cy.get("input[name='district']").should('have.value', entregador.endereco.bairro)
        cy.get("input[name='city-uf']").should('have.value', entregador.endereco.cidade_uf)

        cy.contains(".delivery-method li", entregador.metodo_entrega).click()

        cy.get("input[accept*='image']").attachFile("/images/" + entregador.cnh)

        cy.get("form button[type='submit'").click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get(".swal2-container .swal2-html-container")
            .should('have.text', expectedMessage)
    });
});