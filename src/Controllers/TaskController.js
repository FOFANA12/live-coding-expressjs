import Task from "../Models/Task.js";
import { StatusCodes } from "http-status-codes";
import prisma from "../prisma.js";

export default class TaskController {
  index = async (req, res, next) => {
    try {
      const tasks = await prisma.task.findMany();
      res.status(StatusCodes.OK).json({ tasks });
    } catch (error) {
      next(error);
    }
  };

  show = async (req, res, next) => {
    try {
      const taskId = req.params.id;
      if (!taskId) {
        console.log("Id est obligatoire");
        return;
      }
      const task = await prisma.task.findUnique({
        where: { id: Number(taskId) },
      });
      res.status(StatusCodes.OK).json({ task });
    } catch (error) {
      next(error);
    }
  };

  store = async (req, res, next) => {
    const { title, description, project_id: projectId } = req.body;
    try {
      const task = await prisma.task.create({
        data: {
          title,
          description,
          projectId,
        },
      });
      res.status(StatusCodes.CREATED).json({ task });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { title, description, project_id: projectId } = req.body;
      const task = await prisma.task.update({
        where: { id: Number(req.params.id) },
        data: {
          title,
          description,
          projectId,
        },
      });
      res.status(StatusCodes.OK).json({ task });
    } catch (error) {
      next(error);
    }
  };

  destroy = async (req, res, next) => {
    try {
      const taskId = req.params.id;
      if (!taskId) {
        console.log("Id est obligatoire");
        return;
      }

      const result = await prisma.task.delete({
        where: {id: Number(taskId)}
      });
      res.status(StatusCodes.OK).json({
        message: "Suppression OK",
      });
    } catch (error) {
      next(error);
    }
  };
}
