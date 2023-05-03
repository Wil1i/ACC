const Order = require("../models/Order");
const axios = require("axios");

const post = async (req, res) => {
  const [orderId, supplier, description] = req.body;
  const time = await axios.get("https://prayer.aviny.com/api/prayertimes/1");
  const date = time.split(" - ")[0];

  await Order.create({
    name: supplier,
    orderId,
    time: date,
    description,
    mode: "sabtFaktor",
  });
  res.json({ ok: true });
};

module.exports = {
  post,
};
