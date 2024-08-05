describe('check visibility buttons on the page', () => {
    const { username, password } = Cypress.env();

    beforeEach(() => cy.visit(`https://${username}:${password}@qauto.forstudy.space/`));

    it('header buttons should be visible', () => {
        const headerButtonsNames = ['Home', 'About', 'Contacts', 'Guest log in', 'Sign In'];

        cy.get('.header')
          .find('.header-link, .btn')
          .each(( element, index, $list ) => {
              cy.wrap(element).should('be.visible');

              expect(element.text()).to.equal(headerButtonsNames[index]);
              expect($list.length).to.equal(headerButtonsNames.length);
          });
    });

    it('Sign up button should be visible', () => {
        cy.contains('button', 'Sign up').should('be.visible');
    });

    it('footer buttons should be visible', () => {
        const footerButtonsLinks = ['facebook', 't.me', 'youtube', 'instagram', 'linkedin', 'ithillel', 'mailto'];

        footerButtonsLinks.forEach(link => {
            cy.get('#contactsSection')
              .find(`a[href*='${link}'`)
              .should('be.visible');
        });
    });
});