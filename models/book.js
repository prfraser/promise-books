const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Book = db.model('Book', { 
	name: { type: String, required: true },
	author: { type: String, required: true },
	description: { type: String, required: true }
});

module.exports = Book;