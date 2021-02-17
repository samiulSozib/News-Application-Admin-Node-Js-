const route=require('express').Router()
const {getAllNews,getSingleNews,getNewsByCategory}=require('../controller/apiController')

route.get('/allNews',getAllNews)
route.get('/allNews/:newsId',getSingleNews)
route.get('/allNews/category/:categoryName',getNewsByCategory)

module.exports=route