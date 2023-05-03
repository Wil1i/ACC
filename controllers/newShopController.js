const Shop = require("../models/Shop");

const get = async (req, res) => {
  const allShops = await Shop.findAll();

  res.render("newShop", {
    flash: req.flash(),
    allShops,
    q: false,
  });
};

const post = async (req, res) => {
  await Shop.create({
    name: req.body.name,
    number: req.body.number,
  });
  res.redirect("/");
};

module.exports = {
  get,
  post,
};
