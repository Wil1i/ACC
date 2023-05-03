const Order = require("../models/Order");

const post = async (req, res) => {
  const findTargetOrder = await Order.findByPk(req.body.id);
  if (findTargetOrder) {
    try {
      await findTargetOrder.update({ price: req.body.price });
      res.send({ ok: true });
    } catch (err) {
      res.send({ ok: false, err });
    }
  } else {
    res.send({ ok: false, err: "parameters not defined [id, price]" });
  }
};

module.exports = {
  post,
};
