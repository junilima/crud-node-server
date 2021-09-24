import { Router } from 'express'
import { User } from '../../db'

const auth = Router()

auth.post('/login', async (req, res) => {
  const { username, password } = req.body

  User.findAll({ where: { username, password } })
    .then((users) => {
      console.log('users: ', users)
      res.status(200).json(users?.[0])
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ err })
    })
})

auth.get('/health', (req, res) => {
  res.send('ok')
})

export default auth
