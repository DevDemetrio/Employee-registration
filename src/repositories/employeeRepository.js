const employee =[
  {
    nome: "João da Silva",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    endereco: "Rua das Flores, 123 - São Paulo, SP"
  },
  {
    nome: "Maria Oliveira",
    cpf: "987.654.321-00",
    rg: "98.765.432-1",
    endereco: "Avenida Brasil, 456 - Rio de Janeiro, RJ"
  },
  {
    nome: "Carlos Pereira",
    cpf: "111.222.333-44",
    rg: "33.222.111-0",
    endereco: "Rua dos Andradas, 789 - Belo Horizonte, MG"
  }
]


class employeeRepository{
  findAll(){
    return new Promise((resolve, reject) =>{
      resolve(employee)
    }) 
  }
}

module.exports = new employeeRepository();