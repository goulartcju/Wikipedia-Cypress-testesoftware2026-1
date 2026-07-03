describe('Wikipedia', () => {

  const resultados = []

  it('Visitar Site', () => {

    cy.visit('https://www.wikipedia.org/')

  })

  it('Pesquisa válida', () => {

    const pesquisa = 'Sabrina Carpenter'

    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type(pesquisa)
    cy.get('.pure-button').click()

  })

  it('Validar o título da página após a pesquisa', () => {

    const pesquisa = 'Sabrina Carpenter'

    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type(pesquisa)
    cy.get('.pure-button').click()

    cy.origin('https://pt.wikipedia.org', () => {
      cy.contains('Sabrina Carpenter')
    })

  })

  it('Pesquisar um termo inexistente', () => {

    const termoinex = 'djfn6d5f'

    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type(termoinex)
    cy.get('.pure-button').click()

  })

  it('Validar pesquisa de um termo inexistente', () => {

    const termoinex = 'djfn6d5f'

    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type(termoinex)
    cy.get('.pure-button').click()

    cy.origin('https://pt.wikipedia.org', () => {
      cy.get('.mw-search-nonefound')
        .should('contain', 'A pesquisa não produziu resultados.')
    })

  })

})