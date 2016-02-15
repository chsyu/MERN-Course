var Person = require('../models/person');

module.exports = function(req, res, next) {
	Person.findOneAndRemove({ _id: req.params.id }, function(err) {
		if (err) throw err;
		console.log('delete successifully!');
    Person.find({}, function(err, users) {
  		if (err) throw err;
				res.json({userinfos: users});
  	});
	});
};
