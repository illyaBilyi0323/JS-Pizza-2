

var CartItemComponent = require('./CartItemComponent');
var Storage = require('../Storage');


function CartComponent() {

    var all = require('../Pizza_List').list;

    this.items = [];
    var self = this;


    this.addCartItem = function(type,pizzaItem,quantity){

        var itemInCart = self.items.find(function(it){
            return (it.type==type && it.item.id==pizzaItem.id);
        });

        if (itemInCart) {
            itemInCart.cartItemComponent.incQuantity();
            self.refresh();
            return;
        };

        var cartItemComponent = new CartItemComponent();
        cartItemComponent.quantity = quantity || 1;
        cartItemComponent.cartComponent = self;
        cartItemComponent.render(type,pizzaItem);

        self.items.push({
            type:type,
            item:pizzaItem,
            cartItemComponent: cartItemComponent
        });
        self.refresh();
    }


    this.refresh = function(){
            $('#count').html(self.items.length);
            var sum = 0;
            self.items.forEach(function(it){
                var price = it.type=='small'?it.item.small_size.price:it.item.big_size.price;
                var q = it.cartItemComponent.quantity;
                sum+=price*q;
            });
            $('#sum').html(sum);
            Storage.saveCart();
    }




    this.restore = function(){
        var data = localStorage.getItem('data');
        if (!data) return;
        data = JSON.parse(data);
        data.forEach(function(it){
            var item = all.find(function(itItem){
                return itItem.id==it.id;
            });
            if (!item) throw new Error("no item with id " + it.id);
            self.addCartItem(it.type,item,it.q);
        })
    };

}

module.exports  = CartComponent;