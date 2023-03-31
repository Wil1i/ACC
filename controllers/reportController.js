const Order = require("../models/Order")
const Shop = require("../models/Shop")

const get = async (req, res) => {
    const orders = await Order.findAll({order : [['time', 'DESC']]})
    const allShops = await Shop.findAll()
    res.render("report", {
        flash : req.flash(),
        orders,
        allShops,
        q : false
    })
}

const post = (req, res) => {

}

module.exports = {
    get,
    post
}