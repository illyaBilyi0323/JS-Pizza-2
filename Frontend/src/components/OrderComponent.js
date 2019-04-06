
var storage = require('../Storage');

function OrderComponent(){

    var $nameInput = $('#inputName');
    var $addressInput = $('#inputAdress');
    var $phoneInput = $('#inputPhone');

    var self = this;

    self.validateName = function(val){
        if (!val.length) return false;
        var matches = val.match(/\d+/g);
        return  matches==null;
    };

    self.validatePhone = function(phone){
        if (!phone) return false;
        if (phone.indexOf('+380')!==0) return false;
        return phone.length===13;
    };

    self.validateAddress = function(address){
        return address.length!==0;
    };

    self.validate  = function(){



        var name= $nameInput.val();
        var address= $addressInput.val();
        var phone= $phoneInput.val();

        var isNameValid = self.validateName(name);
        if (isNameValid) $nameInput.removeClass('error');
        else $nameInput.addClass('error');

        var isPhoneValid = self.validatePhone(phone);
        if (isPhoneValid) $phoneInput.removeClass('error');
        else $phoneInput.addClass('error');

        var isAddressValid = self.validateAddress(address);
        if (isAddressValid) $addressInput.removeClass('error');
        else $addressInput.addClass('error');

        return isNameValid && isPhoneValid && isAddressValid;
    };

    $('.next-step-button').on('click',function(){
        var res = self.validate();
        if (!res) return;

        var cart = storage.getCart();
        console.log(cart);


        var order = {
            cart: cart,
            phone: $phoneInput.val(),
            address: $addressInput.val(),
            name: $nameInput.val()
        }

        console.log('will be send',order);

        $.ajax({
            type: "POST",
            url: '/api/create-order',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(order),
            success: function (data) {
                console.log(data)
            }
        })

    });

}




module.exports = OrderComponent;