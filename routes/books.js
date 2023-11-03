var express = require('express');
var router = express.Router();
var books = require('../resources/books')


router.get('/add', function(req, res, next) {
  res.render('addBooks', { title: 'Add Books' });
});

router.post('/save', function(req, res, next){
    books.push({...req.body, _id:`00${books.length + 1}`})
    res.redirect('/')
})

router.get('/edit/:_id', function(req, res, next){
    console.log(req.params._id)
    const book = books.find((book)=>book._id === req.params._id)
    res.render('editBooks', {title: "Edit Books", book})
    })

router.post('/saveEdited/:_id', function(req, res, next){
        const currIndex = books.findIndex(book => req.params._id === book._id)
        books.splice(currIndex, 1, {...req.body, _id: req.params._id})
        res.redirect('/')
 })

 router.get('/delete/:id', function(req, res, next){
    console.log(req.params._id)
    const book= books.find((book)=>book._id=== req.params.id)
    const currIndex= books.findIndex(book=> req.params._id=== book._id)
    books.splice(currIndex, 1);
    // Redirect to the homepage or send a success message
    res.redirect('/'); // Redirect to the homepage
 })

module.exports = router;
