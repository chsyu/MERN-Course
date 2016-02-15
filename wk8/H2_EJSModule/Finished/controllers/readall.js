var Person = require('../models/person');

module.exports = function(req, res, next) {
	Person.find({}, function(err, users) {
		if (err) throw err;
		console.log('readall successifully!');
		res.json({userinfos: users});
	});
};
