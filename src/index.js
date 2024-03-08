const C = console.log.bind(console.log)
import app from "./app.js";
import conectar from "./database.js"
import chalk from 'chalk'

const success = chalk.bold.underline.blue;


app.listen(process.env.SERVER_PORT,()=>{
    C(success("Server on port: " + process.env.SERVER_PORT))
})