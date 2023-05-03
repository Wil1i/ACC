const express = require("express");
const Router = express.Router();

const indexController = require("../controllers/indexController");
Router.get("/", indexController.get);
Router.post("/", indexController.post);

const newShopController = require("../controllers/newShopController");
Router.get("/shops", newShopController.get);
Router.post("/shops", newShopController.post);

const reportController = require("../controllers/reportController");
Router.get("/report", reportController.get);
Router.post("/report", reportController.post);

const delApiController = require("../controllers/delApiController");
Router.post("/del", delApiController.post);

module.exports = Router;
