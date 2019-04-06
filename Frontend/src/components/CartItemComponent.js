
var itemTemplate = require('../Templates').PizzaCart_OneItem;

function CartItemComponent(){

    this.quantity = 1;
    var self = this;
    var item;
    self.type = undefined;

    this.cartComponent = undefined;;

    this.render = function(type,pizzaItem){
        var html = itemTemplate({
            type:type,
            item:pizzaItem,
            quantity: self.quantity
        });
        $('#buylist').append(html);
        item = pizzaItem;
        self.type = type;

        $('[data-action="plus"][data-id="'+item.id + '_'+type+'"]').on('click',function(){
            console.log('inc',item.id);
            self.incQuantity();
        });

        $('[data-action="substract"][data-id="'+item.id+ '_'+type+'"]').on('click',function(){
            console.log('dec',item.id);
            self.decQuantity();

        });

    }


    this.incQuantity = function(i){
        self.quantity++;
        console.log('.buylist-item[data-id="'+item.id   +'"] [data-item="quantity_'+self.type+'"]');
        $('.buylist-item[data-id="'+item.id   +'"] [data-item="quantity_'+self.type+'"]').html(self.quantity);
        self.cartComponent.refresh();
    }

    this.decQuantity = function(i){
        if (self.quantity==0) return;
        self.quantity--;
        $('.buylist-item[data-id="'+item.id  + '"] [data-item="quantity_'+self.type+'"]').html(self.quantity);
        self.cartComponent.refresh();
    }




}


module.exports = CartItemComponent;