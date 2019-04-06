/**
 * Created by chaika on 09.02.16.
 */
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Вибір Піци',
        page: 'main'
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: ' Замовити',
        page: 'order'
    });
};