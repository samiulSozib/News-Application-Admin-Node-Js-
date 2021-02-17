const newsRoute=require('../routes/newsRoute')
const uploadRoute=require('../routes/uploadRoute')
const apiRoute=require('../routes/apiRoute')

const routes=[
    {
        path:'/api',
        handler:apiRoute
    },
    {
        path:'/news',
        handler:newsRoute
    },
    {
        path:'/uploads',
        handler:uploadRoute
    },
    {
        path:'/',
        handler:(req,res)=>{
            res.json({
                message:'Welcome to our Application'
            })
        }
    }
]

module.exports=(app=>{
    routes.forEach(r=>{
        if(r.path=='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
})