import express from "express"
import Usercontroller from "./App/Controller/UserController.js"
import RegisterController from "./App/Controller/RegisterController.js"
//TEM QUE IMPORTAR  A CONTROLLER QUE FAZ ISSO

const routes = express.Router() 

//params somente para requisições GET / username = req.params 
routes.get("/github/:username", Usercontroller.getUser)

//body para requisições POST
routes.post("/github/", Usercontroller.getUser)

//body para requisições POST de um registro de usuário
routes.post("/register/", RegisterController.getRegistersUsers)


export default routes
