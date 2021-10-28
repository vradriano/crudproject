const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Título Teste'
  })
})

module.exports = router


