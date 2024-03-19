import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
const port = 3000

// useing cors
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app;