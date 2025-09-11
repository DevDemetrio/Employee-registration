const employeeRepository = require('../repositories/employeeRepository')

class employeesController {
  async index(request, response){
    const {orderBy} = request.query
    const employees = await employeeRepository.findAll(orderBy)
    response.json(employees)
  }

  async show(request, response){
    const {id} = request.params;

    const employee = await employeeRepository.findById(id);

    if(!employee){
      return response.status(404).json({error: "User not found"})
    }
    response.json(employee)

  }

  async delete(request, response){
    const {id} = request.params

    await employeeRepository.delete(id);
    response.sendStatus(204); 
  }

  async store(request, response){
    const {nome, cpf, rg,endereco} = request.body

    const employeeExists = await employeeRepository.findByCpf(cpf);

    if(employeeExists){
      return response.status(400).json({error: "This CPF is already in use"})
    }
    
    const employe = await employeeRepository.create({nome, cpf, rg,endereco})

    response.send(employe)

  }
  
  async update(request, response){
    const {id} = request.params;
    const {nome, cpf, rg,endereco} = request.body

    const employeeIdExists = await employeeRepository.findById(id);
  
    if(!employeeIdExists){
      return response.status(400).json({error: "Employee not found"})
    }

    const employe = await employeeRepository.update(id, {
      nome, cpf, rg,endereco
    })

    response.json(employe);
  }
  

}



module.exports = new employeesController(); 