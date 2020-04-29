var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/blogControl');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('root: this does nothing');
});

router.get('/blog', ctrl.blogGetAll);
router.post('/blog', ctrl.blogAdd);
router.get('/blog/:id', ctrl.blogGet);
router.put('/blog/:id', ctrl.blogEdit);
router.delete('/blog/:id', ctrl.blogDelete);

module.exports = router;
