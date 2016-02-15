var Person = require('../models/person');

module.exports = function(req, res, next) {
	Person.findOne({ _id: req.params.id }, function(err, user) {
		if (err) throw err;
		console.log('read successifully!');
		res.json({userinfo: user});
	});
};
