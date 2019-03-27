/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    // //This code will execute when the page is ready
    // var PizzaMenu = require('./pizza/PizzaMenu');
    // var PizzaCart = require('./pizza/PizzaCart');
    // var Pizza_List = require('./Pizza_List');
    //
    // PizzaCart.initialiseCart();
    // PizzaMenu.initialiseMenu();

    var PizzaListComponent = require('./components/PizzaListComponent');
    var CartComponent = require('./components/CartComponent');
    var Storage = require('./Storage');

    var pizzaListComponent  = new PizzaListComponent();
    var cartComponent = new CartComponent();

    pizzaListComponent.cartComponent = cartComponent;
    Storage.cartComponent = cartComponent;

    cartComponent.restore();

});