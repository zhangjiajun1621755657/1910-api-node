var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '192.168.61.99',
  user: 'root',
  password: 'oneinstack',
  database: '1910shop'
})
/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  // connection.connect()
  // var list = [
  //   {goods_id:12345,goods_name:"AAAAA",goods_price:123},
  //   {goods_id:56789,goods_name:"BBBBB",goods_price:123},
  //   {goods_id:10233,goods_name:"CCCCC",goods_price:123},
  //   {goods_id:13246,goods_name:"DDDDD",goods_price:123},
  // ];
  // res.send(list);
  connection.query('SELECT * FROM 1910shop.shop_goods ORDER BY DESC LIMIT 9', function (error, list, fields) {
    if (error) throw error;
    // console.log('The solution is: ', list);
    res.send(list);
  })

});
module.exports = router;