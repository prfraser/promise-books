const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Book = db.model('Book', { 
	name: { type: String, required: true },
	author: { type: Schema.Types.ObjectId, ref: 'Author' },
	description: { type: String, required: true }
});

module.exports = Book;