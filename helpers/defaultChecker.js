const fs = require("fs");

const defaultChecker = async () => {
  console.log("Reading Models directory.");
  // Read models and create table for each model which is not exist
  fs.readdirSync("./models").forEach((model) => {
    console.log(`Registering model ${model.split(".")[0]}`);
    const requiredModel = require(`../models/${model}`);
    requiredModel.sync(); // Check and create table if it's not exist
  });
};

module.exports = defaultChecker;
