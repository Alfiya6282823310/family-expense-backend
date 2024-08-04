const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "fullname":String,
        "email": String,
        "username":String,
        "password":String     
    }
)
let expensemodel = mongoose.model("expenses", schema);
module.exports = { expensemodel }