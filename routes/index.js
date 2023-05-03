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

const submitAPIController = require("../controllers/submitAPIController");
Router.post("/api/orders/create", submitAPIController.post);

const updatePriceAPIController = require("../controllers/updatePriceAPIController");
Router.post("/api/orders/update", updatePriceAPIController.post);

module.exports = Router;
