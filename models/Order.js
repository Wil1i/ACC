const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Orders = db.define("orders", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.TEXT
    },

    orderId : {
        type : DataTypes.TEXT
    },

    time : {
        type : DataTypes.TEXT
    },

    price : {
        type : DataTypes.TEXT
    },

    description : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Orders