const router=require('express').Router()
const upload=require('../middleware/uploadMiddleware')

const {newsImageUploadController}=require('../controller/uploadController')

router.post('/postImage',upload.single('post-image'),newsImageUploadController)

module.exports=router