import { Router } from "express";
import { controlArduino, index, openDoor } from '../controller/requestController.js'

const router=Router()

router.get('/index',index)
router.get('/openDoor', openDoor)
router.get('/controlArduino',controlArduino)




export default router