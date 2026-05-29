import Project from "../Models/Project.js";
import { StatusCodes } from "http-status-codes";
const { ENV } = process.env;

export default class ProjectController {
  index = async (req, res, next) => {
    try {
      const projects = await Project.findAll();
      res.json({ projects });
    } catch (error) {
      next(error);
    }
  };

  show = async (req, res, next) => {
    try {
      const projectId = req.params.id;
      if (!projectId) {
        console.log("Id est obligatoire");
        return;
      }

      const project = await Project.findById(projectId);
      res.json({ project });
    } catch (error) {
      next(error);
    }
  };

  store = async (req, res, next) => {
    try {
      const data = req.body;
      const project = await Project.create(data);
      res.status(StatusCodes.CREATED).json({ project });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const data = req.body;
      const project = await Project.update(req.params.id, data);
      res.status(StatusCodes.OK).json({ project });
    } catch (error) {
      next(error);
    }
  };

  destroy = (req, res, next) => {
    res.json({ message: "Destroy" });
  };
}
