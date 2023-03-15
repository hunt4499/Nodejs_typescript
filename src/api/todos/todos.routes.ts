import * as TodosHandler from './todos.handler';
import {  Todo } from './todos.model';
import {  Router } from 'express';
import { validateRequest } from '../../middlewares';
import { ParamsWithId } from '../../interfaces/ParamsWithId';

const router = Router();




router.get('/', TodosHandler.findAll);
router.get('/:id', validateRequest({ params: ParamsWithId }) ,TodosHandler.findOne);
router.post('/', validateRequest({ body: Todo }), TodosHandler.createOne);
router.put('/:id', validateRequest({ params: ParamsWithId,body:Todo }), TodosHandler.updateOne);
router.delete('/:id', validateRequest({ params: ParamsWithId}), TodosHandler.deleteOne);


export default router;
