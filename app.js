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

Book.create({ 
	name: 'Book 1', 
	author: 'George RR Martin', 
	description: 'cool book' }, (error, response) => {
  console.log(response)
  if (error){
  	console.log(error)
  	return;
  }
		Book.find((err, response) => {
			console.log(response)
			if (error){
				console.log(err)
				return;
			}
			Book.findOneAndUpdate(
			   { "name" : "Book 1" },
			   { "name" : "Book 2" }, (err, response) => {
				console.log(response)
				if (error){
					console.log(err)
					return;
				}
			})
	  }
	})
});