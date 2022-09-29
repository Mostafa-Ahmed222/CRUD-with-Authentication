import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import * as blogController from "./controller/blog.js";

const router = Router()
router.post('/', auth(),blogController.addBlog)
router.patch('/:id', auth(),blogController.updateBlog)
router.delete('/:id', auth(),blogController.deleteBlog)
router.get('/',blogController.getAllBlogs)



export default router