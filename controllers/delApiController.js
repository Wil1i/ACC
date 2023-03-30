const Order = require("../models/Order")

const post = async (req, res) => {
    Order.findByPk(req.body.id).then(result => {
        result.destroy().then(() => {res.send(true)})
    })
}

module.exports = {
    post
}