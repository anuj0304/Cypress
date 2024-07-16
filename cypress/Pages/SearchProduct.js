export default class SearchProduct{


     Search(productname) {

        //cy.get('//input[@id="twotabsearchtextbox"]').type(productname)
        cy.get('#twotabsearchtextbox').click().type(productname);

       // cy.get('#twotabsearchtextbox', { timeout: 10000 }).should('be.visible').type(productname);


      //  cy.get('//input[@id="nav-search-submit-button"]').click()
        cy.get('#nav-search-submit-button', { timeout: 10000 }).should('be.visible').click();

    }
        
 // Method to add product to cart (example)
      AddToCart() {

     //cy.get('#a-autoid-1-announce').click({});
     cy.scrollTo(100, 500).wait(0)
     cy.get('#a-autoid-1-announce', { timeout: 10000 }).scrollIntoView().should('be.visible')
     .trigger('mousedown', { which: 1 });
     //.trigger('mouseup', { which: 1 });
     //.click({force:true});

     //cy.get('#a-autoid-1-announce').click({ force: true });  // Use force: true if the element might be hidden or covered
 
     //cy.contains('[id="a-autoid-1-announce"]').dblclick({  waitForAnimations: true });
     cy.wait(6000);

      cy.get('#a-autoid-2-announce').click();

      //cy.contains('button','a-autoid-1-announce').dblclick({  waitForAnimations: false });
      cy.wait(6000);



         

 }



}
    

//export default SearchProduct
