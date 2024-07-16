import Home from '../Pages/Home';
import SearchProduct from '../Pages/SearchProduct';
import Checkout from '../Pages/Checkout';

describe('Amazon Test Suite', () => {
  const home = new Home();
  const searchProduct = new SearchProduct();
  const checkout = new Checkout();

  beforeEach(() => {
    // Perform login before each test
    home.visit();
    home.login();
  });

  afterEach(() => {
    // Perform logout or any cleanup after each test if needed
    // For example, logout from the application
    // home.logout();
  });

  it('should search for a product, add to cart, and proceed to checkout', () => {
    // Perform search for a product
    searchProduct.Search('Mobile');

    // Add the product to cart
    searchProduct.AddToCart();

    // Proceed to checkout
    checkout.checkoutProcess();

    // Optionally, add assertions to verify the checkout process
    // For example:
    // cy.contains('Order Summary').should('be.visible');
  });

  // Add more tests as needed within this describe block

});
