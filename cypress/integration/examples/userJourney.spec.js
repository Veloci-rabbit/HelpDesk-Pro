describe('These tests check App Endpoints', () => {
  it('Visit localhost:8080', () => {
    cy.visit('http://localhost:8080')

  })

  it('Visit /viewtickets endpoint', () => {
    cy.visit('http://localhost:8080')
    cy.contains('VIEW TICKETS').click()
    cy.url()
    .should('include', '/viewtickets')
  })

  it('Visit /viewtickets/all endpoint', () => {
    cy.visit('http://localhost:8080')
    cy.contains('VIEW TICKETS').click()
    cy.contains('VIEW ALL').click()
    cy.url()
    .should('include', '/viewtickets/all')
  })

  it('Visit /viewtickets/open endpoint', () => {
    cy.visit('http://localhost:8080')
    cy.contains('VIEW TICKETS').click()
    cy.contains('OPEN').click();
    cy.url()
    .should('include', '/viewtickets/open')
  })

  it('Visit /viewtickets/resolved endpoint', () => {
    cy.visit('http://localhost:8080')
    cy.contains('VIEW TICKETS').click();
    cy.contains('RESOLVED').click()
    cy.url()
    .should('include', '/viewtickets/resolved')
  })
})

describe('These tests check for creating new ticket', () => {
  
  it('Handle user submission', () => {
    cy.visit('http://localhost:8080')
      .get('input[name="student"]')
      .type('John')
      .should('have.value', 'John')
    
      .get('textarea[name="problem"]')
      .type('I have a big problem')
      .should('have.value', 'I have a big problem')

      .get('textarea[name="expectations"]')
      .type('We expected this test to work')
      .should('have.value', 'We expected this test to work')
    
      .get('textarea[name="tried"]')
      .type('Everything')
      .should('have.value', 'Everything')

      .get('textarea[name="notWorking"]')
      .type('We believe this test was set up incorrectly')
      .should('have.value', 'We believe this test was set up incorrectly')
    
      .get('input[name="zoom"]')
      .type('www.gethelp.com')
      .should('have.value', 'www.gethelp.com')
      cy.contains('SUBMIT').click();
      cy.get('.Toastify__toast--success')
  })

})

