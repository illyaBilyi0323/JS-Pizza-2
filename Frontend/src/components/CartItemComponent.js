
var itemTemplate = require('../Templates').PizzaCart_OneItem;

function CartItemComponent(){

    this.quantity = 1;
    var self = this;
    var item;

    this.cartComponent = undefined;;

    this.render = function(type,pizzaItem){
        var html = itemTemplate({
            type:type,
            item:pizzaItem,
            quantity: self.quantity
        });
        $('#buylist').append(html);
        item = pizzaItem;

        $('[data-action="plus"][data-id="'+item.id+'"]').on('click',function(){
            self.incQuantity();
        });

        $('[data-action="substract"][data-id="'+item.id+'"]').on('click',function(){
            self.decQuantity();
        });

    }


    this.incQuantity = function(i){
        self.quantity++;
        $('.buylist-item[data-id="'+item.id+'"] [data-item="quantity"]').html(self.quantity);
        self.cartComponent.refresh();
    }

    this.decQuantity = function(i){
        self.quantity--;
        $('.buylist-item[data-id="'+item.id+'"] [data-item="quantity"]').html(self.quantity);
        self.cartComponent.refresh();
    }




}


module.exports = CartItemComponent;