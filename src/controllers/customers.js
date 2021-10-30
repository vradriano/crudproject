const CustomerModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

function index(req, res){
  res.render('register', {
    title: defaultTitle
  })
}


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
  res.render('register', {
    title: defaultTitle,
    message: 'Cadastro realizado com sucesso!'
  })
}


async function listUsers(req, res){
  const users = await CustomerModel.find() 

  res.render('listUsers', {
    title: 'Listagem de usuários',
    users,
  })
}

module.exports = {
  index,
  add,
  listUsers,
}

