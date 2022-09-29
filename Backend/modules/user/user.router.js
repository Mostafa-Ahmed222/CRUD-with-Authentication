import { Router } from "express";
import * as userController from "./controller/user.js"
const router = Router()

router.get('/', userController.getAllUsers)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)





export default router