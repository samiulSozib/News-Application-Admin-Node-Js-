const Sequelize=require('sequelize')
const database=require('../config/connectDB')

const News=database.define('post',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    title:{
        type:Sequelize.STRING
    },
    category:{
        type:Sequelize.STRING
    },
    body:{
        type:Sequelize.TEXT
    },
    author:{
        type:Sequelize.STRING
    },
    thumbnail:{
        type:Sequelize.STRING
    },
    sourceLink:{
        type:Sequelize.STRING
    },
    readTime:{
        type:Sequelize.STRING
    }
},{
    timestamps:true
})

module.exports=News