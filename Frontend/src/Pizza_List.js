
module.exports.load = function(callback){
    $.get('/api/get-pizza-list/',function(_list){
        module.exports.list = _list;
        callback();
    })
}