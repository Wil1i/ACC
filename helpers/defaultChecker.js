const fs = require("fs");

const defaultChecker = async () => {
  console.log("Reading Models directory.");
  // Read models and create table for each model which is not exist
  await fs.readdirSync("./models").forEach((model) => {
    console.log(`Registering model ${model.split(".")[0]}`);
    require(`../models/${model}`).sync();
  });
};

module.exports = defaultChecker;
