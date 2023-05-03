const Order = require("../models/Order");

const post = async (req, res) => {
  const findTargetOrder = await Order.findByPk(req.body.id);
  try {
    await findTargetOrder.update({ price: req.body.price });
    res.send({ ok: true });
  } catch (err) {
    res.send({ ok: false, err });
  }
};

module.exports = {
  post,
};
