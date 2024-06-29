const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "username": String,
        "password": String,
        "email": String,

    }
)
let expensemodel = mongoose.model("expenses", schema);
module.exports = { expensemodel }