// const express = require('express');
let Book = require('./models/book');

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