describe('Login', () => {
  it('teste', () => {
    // arrange
    cy.visit('https://desktop.nexxto.com/NexxtoDesktop/pages/login.html')
    cy.get('#registerTabBtn').click()
    cy.url().should('eq', 'https://desktop.nexxto.com/NexxtoDesktop/pages/login.html')
    cy.get('h1').should('contain.text', 'Você presente em seu negócio mesmo fora dele.')
    cy.get('h1').should('have.text', 'Você presente em seu negócio mesmo fora dele.')
        cy.get('h1').contains('Você presente em seu negócio mesmo fora dele.').should('be.visible')
        cy.screenshot('1')
    cy.get('#nexxtoLoginHeader').should('be.visible')
    cy.get('#alarmNotificationSelectInputIcon').click()
    cy.screenshot('2')

  })
})
