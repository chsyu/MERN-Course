var express = require('express'),
    main    = require('../controllers/main'),
    person  = require('../controllers/person'),
    router  = express.Router();

router.route('/').get(main);
router.route('/person/:id').get(person);

module.exports = router;
