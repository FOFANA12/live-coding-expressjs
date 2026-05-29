import { Router } from "express";
const router = Router();
import TaskController from "../Controllers/TaskController.js";

const taskController = new TaskController();

router.get('/', taskController.index);
router.get('/:id', taskController.show);
router.post('/', taskController.store);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.destroy);

export default router;