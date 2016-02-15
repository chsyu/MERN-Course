var Person = require('../models/person');

module.exports = (req, res, next)=>{
	// res.send('Thank you!');
	var person = new Person({
		firstname: req.body.firstname,
		lastname: req.body.lastname
	});
	person.save(function(err){
		if (err) throw err;
		console.log('person saved!');
	}).then(
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.render('index', {userinfos: users});
		})
	);
}
