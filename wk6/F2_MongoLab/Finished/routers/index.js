var express = require('express'),
    index   = require('../controllers/index'),
    person  = require('../controllers/person'),
    router  = express.Router();

router.route('/').get(index);
router.route('/person').post(person);

module.exports = router;
