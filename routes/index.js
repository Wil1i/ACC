const express = require("express")
const Router = express.Router()

const indexController = require("../controllers/indexController")
Router.get("/", indexController.get)
Router.post("/", indexController.post)

const newShopController = require("../controllers/newShopController")
Router.get("/shops", newShopController.get)
Router.post("/shops", newShopController.post)

module.exports = Router