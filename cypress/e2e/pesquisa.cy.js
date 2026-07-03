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

  it('Validar a URL após a pesquisa', () => {

    const pesquisa = 'Sabrina Carpenter'

    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type(pesquisa)
    cy.get('.pure-button').click()

    cy.origin('https://pt.wikipedia.org', () => {
      cy.url().should('include', 'Sabrina_Carpenter')
    })

  })

  it('Validar que existe uma imagem principal no artigo', () => {

    const pesquisa = 'Sabrina Carpenter'

    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type(pesquisa)
    cy.get('.pure-button').click()

    cy.origin('https://pt.wikipedia.org', () => {
      cy.get('.infobox img').should('be.visible')
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

it('Pesquisar novamente após uma pesquisa sem resultados', () => {

  const pesquisa2 = 'Ariana Grande'

  cy.visit('https://www.wikipedia.org/')

  cy.get('#searchInput').type('djfn6d5f')
  cy.get('.pure-button').click()

  cy.origin(
    'https://pt.wikipedia.org',
    { args: { pesquisa2 } },
    ({ pesquisa2 }) => {

      cy.get('.mw-search-nonefound')
        .should('contain', 'A pesquisa não produziu resultados.')

      cy.get('#ooui-php-1')
        .clear()
        .type(pesquisa2)

      cy.get('.oo-ui-buttonElement-button').first().click()

      cy.contains('Ariana Grande').should('be.visible')

    }
  )

})

})