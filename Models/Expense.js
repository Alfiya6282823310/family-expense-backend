const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "fullname":String,
        "email": String,
        "username":String,
        "password":String,
        "confirmpassword":String,
         "month":String,
        "year":Number,
        "amount":Number,
        "category":String,
        "bill":String,
        "description":String

    }
)
let expensemodel = mongoose.model("expenses", schema);
module.exports = { expensemodel }