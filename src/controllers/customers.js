const CustomerModel = require('../models/customers')
const { crypto } = require('../utils/password')

async function add(req, res){
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const senhaCrypto = await crypto(password)

  const register = new CustomerModel({
    name,
    age,
    email,
    password: senhaCrypto,
  })

  register.save()
  res.send('Ok, it works!')
}


module.exports = {
  add
}

