const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name:{
    type: String,
    require: true
  },
  quantity: Number,
  active: {
    type: Boolean,
    default: true
  }
})

module.exports =  mongoose.model("Product", productSchema)
