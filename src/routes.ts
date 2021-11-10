import { Router } from 'express';

import { finishedTask, getTasks } from './controller/TasksController';
import { getOneTask } from './controller/TasksController';
import { saveTasks } from './controller/TasksController';
import { updateTask } from './controller/TasksController';
import { deleteTask } from './controller/TasksController';
import { authUser, saveUser } from './controller/authController';
import tokenValidator from './middleware/TokenValidator';
import { getOneUser } from './controller/UserController';

const routes = Router()

routes.post('/auth', authUser)
routes.post('/auth/create', saveUser)

routes.use(tokenValidator)

routes.get('/user', getOneUser)
routes.get('/tasks', getTasks)
routes.get('/tasks/:id', getOneTask)
routes.post('/tasks', saveTasks)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)

export default routes