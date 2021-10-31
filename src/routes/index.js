const router = require('express').Router()

const CustomersControllers = require('../controllers/customers')
const IndexController = require('../controllers/index')

router.get('/', IndexController.index)

router.get('/register', CustomersControllers.index)
router.post('/register/add', CustomersControllers.add)

router.get('/list', CustomersControllers.list)

//edit
router.get('/edit', CustomersControllers.formEdit)
router.post('/edit/:id', CustomersControllers.edit)

//remove
router.get('/remove/:id', CustomersControllers.remove)

module.exports = router


