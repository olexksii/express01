import express from 'express';
import { isActiveUser } from '../middlewares/isActiveUser.js';
import controller from '../controllers/userController.js';
import trimRequest from 'trim-request';

const router = express.Router();

router
    .route('/')
    .get(
        trimRequest.all,
        isActiveUser,
        controller.getUserInfo
    );

export default router;