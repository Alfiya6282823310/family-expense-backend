const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "fullname":{type:String,required:true},
        "email": {type:String,required:true},
        "username":{type:String,required:true},
        "password":{type:String,required:true},
        "confirmpassword":{type:String,required:true}
       

    }
)
let expensemodel = mongoose.model("expenses", schema);
module.exports = { expensemodel }