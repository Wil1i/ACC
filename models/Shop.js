const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Shop = db.define("shops", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.TEXT
    },

    number : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Shop