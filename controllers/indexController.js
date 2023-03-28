const Order = require("../models/Order")
const Shop = require("../models/Shop")

function isOrderIdAvailable(orderId){
    Order.findOne({where : {orderId}}).then((result) => {
        if(result) return false; else return true
    })
}

const get = async (req, res) => {
    const allOrders = await Order.findAll()
    const allShops = await Shop.findAll()

    res.render("index", {
        flash : req.flash(),
        allOrders,
        allShops
    })
}

const post = async (req, res) => {
    switch(req.query.action){
        case "new":
            if(isOrderIdAvailable(req.body.orderId)){
                await Order.create({
                    name : req.body.name,
                    orderId : req.body.orderId,
                    time : req.body.time,
                    price : req.body.price,
                    description : req.body.description
                }).then((result) => {
                    res.redirect("/")
                })
            }else{
                req.flash("danger", "شماره سفارش تکراری است.")
                res.redirect("/")
            }
            break;
        default:
            console.log("nothing")
            break;
    }
}

module.exports = {
    get,
    post
}