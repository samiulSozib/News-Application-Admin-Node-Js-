const News=require('../models/News')

exports.getAllNews=async(req,res,next)=>{
    try{

        let news=await News.findAll()
        if(news){
            res.json({
                message:'success',
                newses:news
            })
        }else{
            res.json({
                message:'There is no news'
            })
        }

    }catch(e){
        console.log(e)
        next()
    }
}

exports.getSingleNews=async(req,res,next)=>{
    let newsId=req.params.newsId
    console.log(newsId)

    try{
        let news=await News.findOne({where:{id:newsId}})
        if(news){
            res.json(news)
        }else{
            res.json({
                message:'No News Available'
            })
        }
    }catch(e){
        console.log(e)
        next()
    }
}

exports.getNewsByCategory=async(req,res,next)=>{
    let category=req.params.categoryName
    try{
        let news=await News.findAll({where:{category:category}})
        if(news){
            res.json(news)
        }else{
            res.json({
                message:'No News Available'
            })
        }
    }catch(e){
        console.log(e)
        next()
    }
}