import Project from "../Models/Project.js";
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
        if(!projectId){
            console.log('Id est obligatoire');
            return;
        }

        const project = await Project.findById(projectId);
        res.json({ project });
    } catch (error) {
        
    }
  };

  store = (req, res, next) => {
    res.json({ message: "Create" });
  };

  update = (req, res, next) => {
    res.json({ message: "Update" });
  };

  destroy = (req, res, next) => {
    res.json({ message: "Destroy" });
  };
}
