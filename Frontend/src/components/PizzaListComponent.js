
var PizzaItemComponent = require('./PizzaItemComponent');
var all = require('../Pizza_List');

function PizzaListComponent () {

    var self = this;

    var items = [];
    this.cartComponent = undefined;

    var pizzas = require('../Pizza_List');

    pizzas.forEach(function(item){
        var curentItem = new PizzaItemComponent();
        curentItem.data =  item;
        var html = curentItem.render();
        $('#pizza_list').append(html);
    });

    $(document).on('click','[data-action="addSmall"]',function(e){
        e.preventDefault();
        var id = $(this).attr('data-id');
        var item = all.find(function(it){return it.id==id});
        self.cartComponent.addCartItem('small',item);
    });
    $(document).on('click','[data-action="addLarge"]',function(e){
        e.preventDefault();
        var id = $(this).attr('data-id');
        var item = all.find(function(it){return it.id==id});
        self.cartComponent.addCartItem('large',item);
    });


}

module.exports = PizzaListComponent;