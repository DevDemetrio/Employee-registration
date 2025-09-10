const { Router} = require('express')
const employeesController = require('./controller/employeesController')


const router = Router()

router.get('/', employeesController.index)

module.exports = router