import express from "express";
import {test} from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";
import { updateUser } from "../controllers/user.controllers.js";
import { deleteUser } from "../controllers/user.controllers.js";
const router=express.Router();

router.get('/test',test);
router.put('/update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);

export default router;

