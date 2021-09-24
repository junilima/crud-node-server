import { Router } from 'express'
import { Costumer } from '../../db'

const costumers = Router()

costumers.post('/', async (req, res) => {
  const {
    fullName,
    cpf,
    cep,
    streetName,
    complement,
    neighborhood,
    city,
    state,
    phones,
    emails,
  } = req.body

  Costumer.create({
    fullName,
    cpf,
    cep,
    streetName,
    complement,
    neighborhood,
    city,
    state,
    phones,
    emails,
  })
    .then(() => {
      res.status(200).json({ message: 'Costumer has been added' })
    })
    .catch((err) => {
      res.status(500).json({ err })
    })
})

costumers.get('/', async (req, res) => {
  Costumer.findAll()
    .then((costumers) => {
      res.status(200).json(costumers)
    })
    .catch((err) => {
      res.status(500).json({ err })
    })
})

costumers.get('/:cpf', async (req, res) => {
  const { cpf } = req.params

  Costumer.findAll({ where: { cpf } })
    .then((costumers) => {
      res.status(200).json(costumers?.[0])
    })
    .catch((err) => {
      res.status(500).json({ err })
    })
})

costumers.delete('/:cpf', async (req, res) => {
  const { cpf } = req.params

  Costumer.destroy({ where: { cpf } })
    .then(() => {
      res.status(200).json({ message: 'Costumer has been deleted' })
    })
    .catch((err) => {
      res.status(500).json({ err })
    })
})

costumers.put('/:cpf', async (req, res) => {
  const { cpf } = req.params
  const {
    fullName,
    cep,
    streetName,
    complement,
    neighborhood,
    city,
    state,
    phones,
    emails,
  } = req.body

  Costumer.update(
    {
      fullName,
      cpf,
      cep,
      streetName,
      complement,
      neighborhood,
      city,
      state,
      phones,
      emails,
    },
    { where: { cpf } }
  )
    .then(() => {
      res.status(200).json({ message: 'Costumer has been updated' })
    })
    .catch((err) => {
      res.status(500).json({ err })
    })
})

export default costumers
