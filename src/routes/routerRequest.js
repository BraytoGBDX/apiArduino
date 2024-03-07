import { Router } from "express";
import { index } from '../controller/requestController.js'

const router=Router()

router.get('/index',index)




export default router