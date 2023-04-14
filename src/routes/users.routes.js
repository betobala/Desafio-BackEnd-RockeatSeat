const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

const notesRouter = require("./notes.routes")



const usersController = new UsersController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)
usersRoutes.use("/:user_id", notesRouter)

module.exports = usersRoutes;