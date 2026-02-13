import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {connectDb} from './config/db.js'
import router from './routes/user_router.js'

dotenv.config()


const app = express()
connectDb();

app.use(cors())
app.use(express.json())

app.use('/api', router)


const Port = process.env.PORT  || 8000
app.listen(Port, () => {
    console.log(`Server is running on ${Port}`)
})