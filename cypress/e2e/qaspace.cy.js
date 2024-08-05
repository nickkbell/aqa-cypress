describe('login test with http authentication', () => {
    it('should login with valid cred using http authentication', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('Guest log in', {timeout: 10000}).should('be.visible');
    });
});
