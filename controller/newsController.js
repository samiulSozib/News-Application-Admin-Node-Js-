const readingTime=require('reading-time')
const news=require('../models/News')
const fs=require('fs')

exports.createNewsGetController=(req,res,next)=>{
    res.render('pages/news/createNews',{title:'Create New News'})
}

exports.createNewsPostController=async(req,res,next)=>{
    let {title,category,body,author,sourceLink}=req.body
    console.log(title,category)

    let readTime=readingTime(body).text
    let thumbnail=`/uploads/${req.file.filename}`

    try{
        return news.create({
            id:req.body.id,
            title,
            category,
            body,
            author,
            thumbnail,
            sourceLink,
            readTime
        }).then((news)=>{
            if(news){
                console.log(news)
                return res.redirect('/news/create-news')
            }else{
                res.json({
                    message:'News create fail'
                })
            }
        })
    }catch(e){
        console.log("fdfdfdsf")
        next()
    }
    

}

exports.getAllNewsGetController=async(req,res,next)=>{
    
    try{

        let allNews= await news.findAll()
        //console.log(allNews)
        res.render('pages/news/allNews',{title:'All News',allNews})

    }catch(e){
        console.log(e)
        next(e)
    }

    
}


exports.editNewsGetController=async(req,res,next)=>{
    let newsId=req.params.id

    try{
        let _news=await news.findByPk(newsId)

        if(!_news){
            return res.json({
                message:'404 not found'
            })
        }


        res.render('pages/news/editNews',{title:'Edit News',_news})
        console.log(_news.thumbnail)
    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.editNewsPostController=async(req,res,next)=>{
    let {title,category,body,author,sourceLink}=req.body
    let newsId=req.params.id
    let readTime=readingTime(body).text
    try{

        let _news=await news.findByPk(newsId)
        if(!_news){
            return res.json({
                message:'404 not found'
            })
        }

        let thumbnail=_news.thumbnail
        if(req.file){
            thumbnail=`/uploads/${req.file.filename}`
        }

        await news.findByPk(newsId).then(function(updateNews){
            updateNews.update({
                title,
                category,
                body,
                author,
                thumbnail,
                sourceLink,
                readTime
            }).then((updateNews)=>{
                if(updateNews){
                    return res.redirect('/news/allNews')
                }else{
                    return res.json({
                        message:'Update Failo'
                    })
                    
                }
            })
        })

    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.deleteNews=async(req,res,next)=>{
    let newsId=req.params.id
    try{
        let _news=await news.findByPk(newsId)
        
        //console.log(thumbnail)
        if(!_news){
            return res.json({
                message:'404 not found'
            })
        }

        let thumbnail=_news.thumbnail
        fs.unlink(`public${thumbnail}`,async(err)=>{

            await news.findByPk(newsId).then((deletedNews)=>{
                deletedNews.destroy();
            }).then((deletedNews)=>{
                    return res.redirect('/news/allNews')
                })

        })
        


    }catch(e){
        console.log(e)
        next(e)
    }
}