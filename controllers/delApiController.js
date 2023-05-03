const Order = require("../models/Order");

const post = async (req, res) => {
  const result = await Order.findByPk(req.body.id);
  if (result)
    result.destroy().then(() => {
      res.send(true);
    });
};

module.exports = {
  post,
};
