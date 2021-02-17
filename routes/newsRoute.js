const router=require('express').Router()

const {createNewsGetController,createNewsPostController,getAllNewsGetController,editNewsGetController,editNewsPostController,deleteNews}=require('../controller/newsController')
const upload=require('../middleware/uploadMiddleware')

router.get('/create-news',createNewsGetController)
router.post('/create-news',upload.single('news-thumbnail'),createNewsPostController)

router.get('/allNews',getAllNewsGetController)


router.get('/edit-news/:id',editNewsGetController)
router.post('/edit-news/:id',upload.single('news-thumbnail'),editNewsPostController)


router.get('/deleteNews/:id',deleteNews)

module.exports=router