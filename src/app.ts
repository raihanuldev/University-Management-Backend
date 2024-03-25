import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()

// useing cors
app.use(cors())
                        app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// test

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
