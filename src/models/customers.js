const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String, 
})

const Model = mongoose.model('customers', schema)




/*

const register = new Model({
  name: 'Vitor',
  age: 23,
  email: 'vradriano@hotmail.com',
  password: '123456789'
})

register.save()

*/

module.exports = Model