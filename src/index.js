import express from 'express'
import { initDB } from './db'
import routes from './routes'

const app = express()

app.use('/', routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  initDB()
})

export default app
