const Order = require("../models/Order")
const Shop = require("../models/Shop")

const get = async (req, res) => {
    const allOrders = await Order.findAll({where : {mode : req.query.list || "sabtFaktor"}, order: [['time', 'DESC']]})
    let lastId;
    await Order.findAll({where : {mode : req.query.list || "sabtFaktor"}}).then((result) => {
        if (result) lastId = result[result.length - 1].id
    })
    const allShops = await Shop.findAll()
    console.log(req.query.list || "menu")
    res.render("index", {
        flash : req.flash(),
        allOrders,
        allShops,
        lastId,
        q: req.query.list || "menu"
    })
}

const post = async (req, res) => {
    switch(req.query.action){
        case "new":
            if(req.query.list && req.query.list == "sabtPardakht"){
                await Order.create({
                    name : req.body.name,
                    orderId : "",
                    time : req.body.time,
                    price : req.body.price,
                    description : req.body.description,
                    mode : req.query.list || "sabtFaktor"
                }).then(() => {
                    res.redirect(`/?list=${req.query.list || "sabtFaktor"}`)
                })
                break
            }
            Order.findOne({where : {orderId : req.body.orderId}}).then(async (result) => {
                if(!result){
                    await Order.create({
                        name : req.body.name,
                        orderId : req.body.orderId,
                        time : req.body.time,
                        price : req.body.price,
                        description : req.body.description,
                        mode : req.query.list || "sabtFaktor"
                    }).then(() => {
                        res.redirect(`/?list=${req.query.list || "sabtFaktor"}`)
                    })
                }else{
                    req.flash("danger", "شماره سفارش تکراری است.")
                    res.redirect(`/?list=${req.query.list || "sabtFaktor"}`)
                }
            })
            
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