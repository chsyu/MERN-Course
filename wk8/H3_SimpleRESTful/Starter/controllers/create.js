var Person = require('../models/person');

module.exports = function(req, res, next) {
	var person = new Person(req.body);
	person.save(function(err){
		if (err) throw err;
		console.log('create successifully!');
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.json({userinfos: users});
		});
	});
};
