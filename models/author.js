const { mongoose, db } = require('../database');
const Author = db.model('Author', { 
	name: { type: String, required: true }
});

module.exports = Author;