// const express = require('express');
let Book = require('./models/book');
let Author = require('./models/author');

// Book.create({ 
// 	name: 'A Game of Thrones', 
// 	author: 'George RR Martin', 
// 	description: 'cool book' }, (error, response) => {
//   console.log(response)
// });

// Book.find((err, response) => {
// 	console.log(response)
// })

// Book.findOneAndUpdate(
//    { "name" : "A Game of Thrones" },
//    { "name" : "A Song of Ice and Fire" }, (err, response) => {
// 	console.log(response)
// })

// Book.findOneAndRemove(
//    { "name" : "A Game of Thrones" }, (err, response) => {
// 	console.log(response)
// })

// Book.create({ 
// 	name: 'Book 1', 
// 	author: 'George RR Martin', 
// 	description: 'cool book' }, (error, response) => {
//   console.log(response)
//   if (error){
//   	console.log(error)
//   	return;
//   }
// 		Book.find((err, response) => {
// 			console.log(response)
// 			if (error){
// 				console.log(err)
// 				return;
// 			}
// 			Book.findOneAndUpdate(
// 			   { "name" : "Book 1" },
// 			   { "name" : "Book 2" }, (err, response) => {
// 				console.log(response)
// 				if (error){
// 					console.log(err)
// 					return;
// 				}
// 			})
// 	  }
// 	})
// });

// Book.create({ 
// 	name: 'A Game of Thrones', 
// 	author: 'George RR Martin', 
// 	description: 'cool book' })
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

// Book.find()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

// Book.findOneAndUpdate(
//    { "name" : "A Game of Thrones" },
//    { "name" : "A Song of Ice and Fire" })
//    	.then(res => console.log(res))
//    	.catch(err => console.log(err))

// Book.findOneAndRemove(
//    { "name" : "A Song of Ice and Fire" })
//    .then(res => console.log(res))
//    .catch(err => console.log(err))

// Promise.all([
// 		Book.create({ 
// 		name: 'Cool Book', 
// 		author: 'George RR Martin', 
// 		description: 'cool book' }),
// 		Book.find(),
// 		Book.findOneAndUpdate(
// 		   { "name" : "Cool Book" },
// 		   { "name" : "Really Cool Book" }),
// 		Book.findOneAndRemove(
// 	   { "name" : "Really Cool Book" }),
// 		Book.find()
// 	]).then(([res1, res2, res3, res4, res5]) => {
// 		console.log(res1)
// 		console.log(res2)
// 		console.log(res3)
// 		console.log(res4)
// 		console.log(res5)
// 	})

// async function createBook() {
// 	try {
// 	    const newbook = await Book.create({ 
// 				name: 'Cool Book', 
// 				author: 'George RR Martin', 
// 				description: 'cool book' })
// 	    console.log(newbook);
// 	    return newbook;
// 	  } catch (err) {
// 	    return 'error occured';
// 	  }
// }
// createBook()

// async function findBooks() {
// 	try {
// 		const foundBooks = await Book.find()
// 		console.log(foundBooks)
// 	} catch (err) {
// 		console.log(err)
// 	}
// }
// findBooks()

// async function updateBook() {
// 	try {
// 		const updatedBook = await Book.findOneAndUpdate(
// 	   { "name" : "Cool Book" },
// 	   { "name" : "Random book name" })
// 		console.log(updatedBook)
// 	} catch (err) {
// 		console.log(err)
// 	}
// }
// updateBook()

// async function deleteBook() {
// 	try {
// 		const deleteBook = await Book.findOneAndRemove({ "name" : "A Song of Ice and Fire" })
// 		console.log(deleteBook)
// 	} catch (err) {
// 		console.log(err)
// 	}
// }
// deleteBook()

// Author.create(({ name: 'Georgey Boy'}), (error, response) => {
// 	if (error){
//   	console.log(error)
//   	return;
//   }
//   console.log(response)
//   Book.create({ 
//   	name: 'A Game of Thrones', 
//   	author: response._id, 
//   	description: 'cool book' }, (error, response) => {
//   		if (error){
// 	  	console.log(error)
// 	  	return;
// 	  }
// 	    console.log(response)
//   });
// })

// Book.find().populate('author').exec((err, response) => {
// 	console.log(response)
// })


// Author.create({ name: 'Georgey Boy2'})
// 	.then((response) => {
// 		Book.create({ 
// 		  	name: 'A Game of Thrones', 
// 		  	author: response._id, 
// 		  	description: 'cool book' })
// 			.then((response) => {
// 				console.log(response)
// 			})
// 	})
// 	.catch(err => console.log(err))

// Book.find().populate('author').then((response) => console.log(response)).catch(err => console.log(err))

// async function bookAuthorCreate() {
// 	try {
// 	const author = await Author.create({ name: 'Georgey Boy'})
// 	const book = await Book.create({ 
// 		  	name: 'A Game of Thrones', 
// 		  	author: author._id, 
// 		  	description: 'cool book' })
// 	console.log(author)
// 	console.log(book)
// 	} catch (err) {
// 		console.log(err)
// 	}
// }
// bookAuthorCreate()

async function findPopulatedBooks() {
	try {
		const books = await Book.find().populate('author')
		console.log(books)
	} catch (err) {
		console.log(err)
	}
}

findPopulatedBooks()