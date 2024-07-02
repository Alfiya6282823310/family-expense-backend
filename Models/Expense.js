const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "fullname":{type:String,required:true},
        "email": {type:String,required:true},
        "username":{type:String,required:true},
        "password":{type:String,required:true},
        "confirmpassword":{type:String,required:true}
         "month":String,
        "year":Number,
        "category":String,
        "bill":String,
        "description":String
       


    }
)
let expensemodel = mongoose.model("expenses", schema);
module.exports = { expensemodel }