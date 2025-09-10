const employeesController = require('../repositories/employeeRepository')

class employeesController {
  async index(request, response){
    const employees = await employeesController.findAll()
    response.send(employees)
  }
  show(){}
  store(){}
  update(){}
  delete(){}

}

module.exports = new employeesController();