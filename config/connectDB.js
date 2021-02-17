const {Sequelize}=require('sequelize')

const DB_NAME="news_application";
const DB_USERNAME="root";
const DB_PASSWORD="";
const DB_HOST="localhost";

module.exports=new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD,{
    host:DB_HOST,
    dialect:'mysql'
})