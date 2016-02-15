var Person = require('../models/person');

module.exports = function(req, res, next) {
	Person.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, user) {
		if (err) throw err;
		console.log('update successifully!');
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.json({userinfos: users});
		});
	});
};
