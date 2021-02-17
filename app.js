const express=require('express')
const setMiddleware=require('./middleware/middlewares')
const setRoutes=require('./routes/routes')
const database=require('./config/connectDB')

const app=express()

app.set('view engine','ejs')
app.set('views')

setMiddleware(app)
setRoutes(app)

database.authenticate()
    .then(()=>{
        console.log('Database Connect Success')
        app.listen(1000,()=>{
            console.log('Server Created Success')
        })
    })
    .catch((e)=>{
        console.log(e)
    })