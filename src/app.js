import express from 'express'
import morgan from 'morgan'
import { config } from "dotenv";
import requestRoutes from './routes/routerRequest.js'
import bodyParser from 'body-parser'

config()

const app=express()

//configuration
app.set('view engine','ejs')

//middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use('/',requestRoutes)

export default app
