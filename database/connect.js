require('../controllers/settings');
const mongoose = require('mongoose');

function connectToMongoDb() {
	mongoose.connect(mongo_Db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection error:'));
	db.once('open', () => {
		console.log('Berhasil terhubung dengan MongoDB');
	});
};

module.exports.connectToMongoDb = connectToMongoDb;