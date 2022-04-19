

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
            whatsapp: '61999999999'
        }

        cy.get("input[name='name']").type(entregador.nome)
        cy.get("input[name='cpf']").type(entregador.cpf)
        cy.get("input[name='email']").type(entregador.email)
        cy.get("input[name='whatsapp']").type(entregador.whatsapp)
    });
});