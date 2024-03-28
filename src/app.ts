import express, { Application } from 'express'
import cors from 'cors'
import router from './app/modules/users/user.routes'
const app: Application = express()

// useing cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// USers Routes
app.use('/api/v1/users',router)



// test
app.get('/', (req, res) => {
  
  res.send('Hello World! Working Succesfully')
})

export default app
