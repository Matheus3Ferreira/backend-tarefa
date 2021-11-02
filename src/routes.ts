import { Router, request, response, Request, Response } from 'express';

import { finishedTask, getTasks } from './controller/TasksController';
import { getOneTask } from './controller/TasksController';
import { saveTasks } from './controller/TasksController';
import { updateTask } from './controller/TasksController';
import { deleteTask } from './controller/TasksController';

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Uiui Kimoti' })
})

routes.get('/tasks', getTasks)
routes.get('/tasks/:id', getOneTask)
routes.post('/tasks', saveTasks)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)

export default routes