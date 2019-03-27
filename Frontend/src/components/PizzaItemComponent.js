
var itemTemplate = require('../Templates').PizzaMenu_OneItem;

function PizzaItemComponent() {

    this.data = undefined;

    this.render = function(){
        return itemTemplate(this.data);
    }

}


module.exports = PizzaItemComponent;