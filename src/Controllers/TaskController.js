import Task from "../Models/Task.js";
import { StatusCodes } from "http-status-codes";

export default class TaskController {
  index = async (req, res, next) => {
    try {
      const tasks = await Task.findAll();
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
      const task = await Task.findById(taskId);
      res.status(StatusCodes.OK).json({ task });
    } catch (error) {
      next(error);
    }
  };

  store = async (req, res, next) => {
    const data = req.body;
    try {
      const task = await Task.create(data);
      res.status(StatusCodes.CREATED).json({ task });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const data = req.body;
      const task = await Task.update(req.params.id, data);
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

      const result = await Task.delete(taskId);
      res
        .status(StatusCodes.OK)
        .json({
          message: result > 0 ? "Suppression OK" : "Error de suppression",
        });
    } catch (error) {
      next(error);
    }
  };
}
