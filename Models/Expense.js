const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "username": String,
        "password": String,
        "email": String,
        "month":String,
        "year":Number,
        "category":String,
        "bill":String,
        "description":String

    }
)
let expensemodel = mongoose.model("expenses", schema);
module.exports = { expensemodel }