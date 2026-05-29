import { Router } from "express";
const router = Router();
import ProjectController from "../Controllers/ProjectController.js";

const projectController = new ProjectController();

router.get('/', projectController.index);
router.get('/:id', projectController.show);
router.post('/', projectController.store);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.destroy);

export default router;