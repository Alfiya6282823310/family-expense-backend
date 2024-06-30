const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "username": String,
        "password": String,
        "email": String

    }
)
let expensemodel = mongoose.model("expenses", schema);
module.exports = { expensemodel }