const { Router} = require('express')
const employeesController = require('./controller/employeesController')


const router = Router()

router.get('/employees', employeesController.index)
router.get('/employees/:id', employeesController.show)
router.delete('/employees/:id', employeesController.delete)
router.post('/employees', employeesController.store)


module.exports = router
