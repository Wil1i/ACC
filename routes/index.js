const express = require("express")
const Router = express.Router()

const indexController = require("../controllers/indexController")
Router.get("/", indexController.get)
Router.post("/", indexController.post)

const adminLoginController = require("../controllers/adminLoginController")
Router.get("/login", isNotLoggedIn,adminLoginController.get)
Router.post("/login", isNotLoggedIn,adminLoginController.post, adminLoginController.loginSuccess)

module.exports = Router