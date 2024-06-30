const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jsonwebtoken = require("jsonwebtoken")

const { expensemodel } = require("./Models/Expense")



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
    input.password = hashedPassword
    let Expense = new expensemodel(input)
    Expense.save()
    res.json({ "status": "success" })
})

app.post("/signin", async (req, res) => {
    let input = req.body
    expensemodel.find({ "username": req.body.username }).then(
        (response) => {
            if (response.length > 0) {
                let dbpassword = response[0].password
                console.log(dbpassword)
                bcrypt.compare(input.password, dbpassword, (error, isMatch) => {
                    if (isMatch) {
                        jsonwebtoken.sign(
                            { username: input.username }, "expense-app", { expiresIn: "6d" }, (error, token) => {
                                if (error) {
                                    res.json({ "status": "success", "userid": response[0]._id, "token": token })
                                }
                            }
                        )
                    } else {
                        res.json({ "status": "incorrect password" })
                    }
                })
            } else {
                res.json({ "status": "user not found" })
            }
        }
    ).catch()
})
app.listen(8080, () => {
    console.log("Server Running")
})