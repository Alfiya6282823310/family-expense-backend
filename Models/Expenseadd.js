const mongoose=require("mongoose")
const ExpenseaddSchema=mongoose.Schema(
    {
        "month":String,
        "year":Number,
        "amount":Number,
        "category":String,
        "bill":String,
        "description":String
    }
)

let addUserModel=mongoose.model("expenseAddUser",ExpenseaddSchema)
module.exports={addUserModel}