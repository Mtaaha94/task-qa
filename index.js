describe('Registration Form', () => {
    beforeEach(() => {
      cy.visit('https://your-website-url.com/registration');
    });
  
    it('should register a user successfully with valid data', () => {
      cy.get('input[name="fullName"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('input[name="confirmPassword"]').type('Password123');
      cy.get('input[name="dob"]').type('1990-01-01');
      cy.get('select[name="gender"]').select('Male');
      cy.get('input[name="newsletter"]').check();
      cy.get('button[type="submit"]').click();
  
      cy.contains('Registration successful').should('be.visible');
    });
  
    it('should opt-in for the newsletter and register successfully', () => {
      cy.get('input[name="fullName"]').type('Jane Doe');
      cy.get('input[name="email"]').type('janedoe@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('input[name="confirmPassword"]').type('Password123');
      cy.get('input[name="dob"]').type('1990-01-01');
      cy.get('select[name="gender"]').select('Female');
      cy.get('input[name="newsletter"]').check();
      cy.get('button[type="submit"]').click();
  
      cy.contains('Registration successful').should('be.visible');
    });
  });
  