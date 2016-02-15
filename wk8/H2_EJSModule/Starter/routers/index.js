var express = require('express'),
    index   = require('../controllers/index'),
    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update  = require('../controllers/update'),
    del     = require('../controllers/del'),
    router  = express.Router();

router.route('/').get(index);
router.route('/person')
  .post(create)
  .get(readall);
router.route('/person/:id')
  .get(read)
  .put(update)
  .delete(del);

module.exports = router;
