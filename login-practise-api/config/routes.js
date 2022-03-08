var express = require('express')
var routes = express.Router()


routes.use("/api/user",require("../controllers/UserController"))
routes.use("/api/login",require("../controllers/UserAuthControllers"))
routes.use("/api/userInfo",require("../controllers/UserInfoController"))



module.exports=routes;