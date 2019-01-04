let router = require('express').Router()
let Images = require('../models/image')

router.post('/', (req, res, next) => {
    Images.create(req.body)
        .then(image => {
            res.send(image)
        })
        .catch(e => {
            console.error(e)
        }) 
})

module.exports = router