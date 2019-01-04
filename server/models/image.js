let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    dataUri: {type: String}
})

module.exports = mongoose.model('Image', schema)