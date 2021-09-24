import { Router } from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import costumers from './costumers'
import auth from './auth'

const router = Router()
router.use(cors())
router.use(json())

// routes
router.use('/costumers', costumers)
router.use('/auth', auth)

export default router
