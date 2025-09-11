const {v4} = require('uuid')
const db = require('../database')

class employeeRepository{
  async findAll(orderBy='ASC'){
  const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
   const row = await db.query(`SELECT id, nome, cpf, rg, endereco FROM myemployee ORDER BY nome ${direction}`)
   return row
  }

  async findById(id){
    const [rows] = await db.query('SELECT * FROM myemployee WHERE id = $1',[id])
    return rows
  }

  async findByCpf(cpf){
    const [rows] = await db.query('SELECT * FROM myemployee WHERE cpf = $1',[cpf])
    return rows
  }

  async delete(id){
   const [rows] = await db.query('DELETE FROM myemployee WHERE id = $1',[id])
   return rows
  }

  async create({nome, cpf, rg,endereco}){
    const [rows] = await db.query(`
      INSERT INTO myemployee(nome, cpf, rg, endereco)
      VALUES($1, $2, $3, $4)`,[nome, cpf, rg, endereco]);

      return rows
  }

  async update(id, { nome, cpf, rg,endereco}){
     const row = await db.query(`
      UPDATE myemployee
      SET nome = $1, cpf = $2, rg = $3, endereco = $4
      WHERE id = $5
      RETURNING *
      `,[nome, cpf, rg, endereco, id])
  }

}

module.exports = new employeeRepository();

