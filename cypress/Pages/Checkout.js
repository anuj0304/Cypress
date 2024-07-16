export default class Checkout{

checkoutProcess(){
      cy.wait(6000);

      cy.get('#nav-cart-count-container').invoke('show').click();

      //cy.get('#nav-cart-count-container').click();
      
      cy.wait(5000);

      //click to proceed
      cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();


      cy.wait(5000);

      cy.contains('Checkout').should('be.visible');

      cy.go('back');

      cy.wait(5000);

      cy.get('.sc-action-delete > .a-declarative > .a-color-link').click();

}



}