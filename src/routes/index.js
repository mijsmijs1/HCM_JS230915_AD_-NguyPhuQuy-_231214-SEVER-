import express from 'express';
const Router = express.Router();
import { userController } from '../controllers/user.controller';
Router.get('/',userController.findAll)
Router.post('/create',userController.create)
Router.patch('/update/:id',userController.update)
Router.delete('/delete/:id',userController.delete)
export default Router;