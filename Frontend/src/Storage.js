
var storate = {

    cartComponent: undefined,

    saveCart: function(){
            var state =[];
            this.cartComponent.items.forEach(function(it){
                state.push({
                    type:it.type,
                    id: it.item.id,
                    q: it.cartItemComponent.quantity
                });
            });
            localStorage.setItem('data',JSON.stringify(state));
    }

}


module.exports = storate;