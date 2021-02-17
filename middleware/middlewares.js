const morgan=require('morgan')
const express=require('express')
const {Sequelize}=require('sequelize')
const database=require('../config/connectDB')



const middleware=[
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended:true}),
    express.json()

]


module.exports=(app)=>{
    middleware.forEach(m=>{
        app.use(m)
    })
}