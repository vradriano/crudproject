const router = require('express').Router()
const CustomersControllers = require('../controllers/customers')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Titulo Teste'
  })
})

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Cadastro de Clientes'
  })
})

router.post('/register/add', CustomersControllers.add)


module.exports = router


