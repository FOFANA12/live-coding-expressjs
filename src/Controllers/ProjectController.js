import { StatusCodes } from "http-status-codes";
import prisma from "../prisma.js";

export default class ProjectController {
  index = async (req, res, next) => {
    try {
      const projects = await prisma.project.findMany({
        select: {
            id: true,
            name: true
        },
        orderBy: {
            id: "desc"
        }
      });
      res.status(StatusCodes.OK).json({ projects });
    } catch (error) {
      next(error);
    }
  };

  show = async (req, res, next) => {
    try {
      const projectId = Number(req.params.id);
      if (!projectId) {
        console.log("Id est obligatoire");
        return;
      }

      const project = await prisma.project.findUnique({
        where: {
          id: projectId,
        },
        include: {tasks: true}
      });
      res.status(StatusCodes.OK).json({ project });
    } catch (error) {
      next(error);
    }
  };

  store = async (req, res, next) => {
    try {
      const { name, description } = req.body;

      const project = await prisma.project.create({
        data: { name, description },
      });
      res.status(StatusCodes.CREATED).json({ project });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { name, description } = req.body;
      const projectId = Number(req.params.id);

      const project = await prisma.project.update({
        data: {
          name,
          description,
        },
        where: {
          id: projectId,
        },
      });
      res.status(StatusCodes.OK).json({ project });
    } catch (error) {
      next(error);
    }
  };

  destroy = async (req, res, next) => {
    try {
      const projectId = Number(req.params.id);
      if (!projectId) {
        console.log("Id est obligatoire");
        return;
      }

      await prisma.project.delete({ where: { id: projectId } });
      res.status(StatusCodes.OK).json({
        message: "Suppression OK",
      });
    } catch (error) {
      next(error);
    }
  };
}
