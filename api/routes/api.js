var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

router.post('/login', (req, res, next) => {
	if (req.body.email && req.body.password) {
		MongoClient.connect("mongodb+srv://maxime:12345@area-ch9st.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
			if (err) throw err;
			var collection = db.db("test").collection("aos");
			collection.findOne({ "email": req.body.email, "password": req.body.password }, (error, result) => {
	        if(error)
	            return res.status(500).send(error);
	        if (result) {
	        	res.json({success: true, message: 'Found'});
	        } else {
	        	res.json({success: false, message: 'User not found'});
	        }
   		 });
		});
	} else {
		res.json({success: false, message: 'Credentials incomplete'});
	}
});

module.exports = router; 