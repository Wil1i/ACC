const express = require("express");
const Router = express.Router();

const submitAPIController = require("../controllers/submitAPIController");
Router.post("/api/orders/create", submitAPIController.post);

const updatePriceAPIController = require("../controllers/updatePriceAPIController");
Router.post("/api/orders/update", updatePriceAPIController.post);

module.exports = Router;
