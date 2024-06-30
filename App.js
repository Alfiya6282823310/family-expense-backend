const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const { expensemodel } = require("./Models/Expense")
const bcrypt = require("bcryptjs")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://abijith0a31:abijith1415@cluster0.fodkdeb.mongodb.net/expenseDB?retryWrites=true&w=majority&appName=Cluster0")


const generateHashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}


app.post("/signup", async (req, res) => {
    let input = req.body
    let hashedPassword = await generateHashedPassword(input.password)
    console.log(hashedPassword)
    input.password=hashedPassword
    let Expense=new expensemodel(input)
    Expense.save()

    res.json({ "status": "success" })
})

app.post("/add",(req,res)=>{
    let input=req.body
    let Expense=new expensemodel(input)
    Expense.save()
    res.json({"status":"success"})
})


app.listen(8080,()=>{
    console.log("Server Running")
})