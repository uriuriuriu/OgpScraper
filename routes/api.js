var express = require('express');
var router = express.Router();

/* サンプルAPI①
 * http://localhost:3000/api にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function(req, res, next) {
  var param = {"値":"これはサンプルAPIです"};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

/* サンプルAPI②
 * http://localhost:3000/api/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
// router.get('/hello', function(req, res, next) {
//   var param = {"result":"Hello World !"};
//   res.header('Content-Type', 'application/json; charset=utf-8');
//   res.send(param);
// });

/* サンプルAPI③
 * http://localhost:3000/api/(任意の文字列) にGETメソッドのリクエストを投げると、
 * JSON形式で(任意の文字列)を返す。
 */
router.get('/:url', function (req, res, next) {
  var param = {"result":"[GET] " + req.params.url};        // レスポンスで返す値。JSON形式。
  res.header('Content-Type', 'application/json; charset=utf-8'); // 「レスポンスはJSON形式で返すよ」の意味
  res.send(param);                                               // 「レスポンス送るよ」の意味
});

/* サンプルAPI④
 * http://localhost:3000/api にPOSTメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post('/', function(req, res, next) {
  var param = {
    "result": "[POST]",
    "req": req.body
  };
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});


module.exports = router;