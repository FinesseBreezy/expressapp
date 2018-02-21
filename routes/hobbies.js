var express = require('express')
var router = express.Router()
var Hobbies = require('../models').Hobby

// EDIT /Hobbies/7
router.put('/:id', function(req, res) {
  Hobbies.update(
    { hobby: req.body.title },
    { where: { id: req.params.id }}
  )
    .then( function() {
      return res.redirect('/hobbies')
    })
})

// GET /Hobbies/7/edit
router.get('/:id/edit', function(req, res) {
  Hobbies.findById(req.params.id)
    .then( function(hobby) {
      return res.render('edit', { hobby: hobby })
    })
})

//  DELETE /Hobbies/7
router.delete('/:id', function(req, res) {
  Hobbies.findById(req.params.id)
    .then( function(hobby) { hobby.destroy() })
    .then( function() { return res.redirect('/hobbies') })

})

// GET /Hobbies
router.get('/', function(req, res) {
  Hobbies.all({
    order: [['createdAt', 'ASC']]
  })
    .then( function(hobbies) {
      res.render('hobbies', { hobbies: hobbies })
    })
})

// POST /Hobbies
router.post('/', function(req, res) {
  var hobby = req.body.title
  Hobbies.create({ hobby: hobby })
    .then( function() {
      res.redirect('/Hobbies')
    })
})

module.exports = router;
