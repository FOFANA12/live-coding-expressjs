export default class TaskController {
    index = (req, res, next) => {
        res.json({message: "Index"})
    }

    show = (req, res, next) => {
        res.json({message: "Show"})
    }

    store = (req, res, next) => {
        res.json({message: "Create"})
    }

     update = (req, res, next) => {
        res.json({message: "Update"})
    }

     destroy = (req, res, next) => {
        res.json({message: "Destroy"})
    }
};