/**
 * Created by chaika on 25.01.16.
 */

var Pizza_List = require('./Pizza_List');

var OrderComponent = require('./components/OrderComponent');

$(function(){

    Pizza_List.load(function(){
        var PizzaListComponent = require('./components/PizzaListComponent');
        var CartComponent = require('./components/CartComponent');
        var Storage = require('./Storage');

        var pizzaListComponent  = new PizzaListComponent();
        var cartComponent = new CartComponent();

        pizzaListComponent.cartComponent = cartComponent;
        Storage.cartComponent = cartComponent;

        cartComponent.restore();
    });

    var orderComponent = new OrderComponent();


});