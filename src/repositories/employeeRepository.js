const {v4} = require('uuid')


let employees =[
  {
    id: v4(),
    nome: "João da Silva",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    endereco: "Rua das Flores, 123 - São Paulo, SP"
  },
  {
    id: v4(),
    nome: "Maria Oliveira",
    cpf: "987.654.321-00",
    rg: "98.765.432-1",
    endereco: "Avenida Brasil, 456 - Rio de Janeiro, RJ"
  },
  {
    id: v4(),
    nome: "Carlos Pereira",
    cpf: "111.222.333-44",
    rg: "33.222.111-0",
    endereco: "Rua dos Andradas, 789 - Belo Horizonte, MG"
  }
]


class employeeRepository{
  findAll(){
    return new Promise((resolve, reject) =>{
      resolve(employees)
    }) 
  }
  findById(id){
    return new Promise((resolve, reject) => resolve(
      employees.find((employee) => employee.id === id),
    ))
  }

  findByCpf(cpf){
    return new Promise((resolve, reject) => resolve(
      employees.find((cpfs) => cpfs.cpf === cpf )
    ))
  }

  delete(id){
    return new Promise((resolve, reject) => {
      employees = employees.filter((employee) => employee.id !== id);
      resolve();
    })
  }

  create({nome, cpf, rg,endereco}){
    return new Promise((resolve) => {
      const NewEmploye = {
        id: v4(),
        nome,
        cpf,
        rg,
        endereco
      }

      employees.push(NewEmploye);
      resolve(NewEmploye);
    })
  }


}

module.exports = new employeeRepository();

