describe('User overview', () => {
    it('should have 11 users', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#table').find('tr').should('have.length', 11)
    });

    it('should order by gender', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#gender-btn').click();
        cy.get('#table').find('tr').eq(1).find('td').eq(1).should('have.text', 'female');
    });

    it('should filter by male', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#male-btn').click();
        cy.get('#table').find('tr').eq(1).find('td').eq(1).should('have.text', 'male');
    });
});

describe('User detail page', () => {
    it('should see detail page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#table').find('tr').eq(1).click();
      cy.contains('Personal details.');
    });
});
