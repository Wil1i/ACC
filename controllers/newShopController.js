const Shop = require("../models/Shop")

const get = async (req, res) => {
    const allShops = await Shop.findAll()

    res.render("newShop", {
        flash : req.flash(),
        allShops
    })
}

const post = (req, res) => {
    Shop.create({
        name : req.body.name,
        number : req.body.number
    }).then((result) => {
        res.redirect("/")
    })
}

module.exports = {
    get,
    post
}