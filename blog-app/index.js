const express = require("express")
const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//import route
const blog = require("./routes/blog")

//mount
app.use("/api/v1", blog);

//connect with db
const connectWithDb = require("./config/database")
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`)
})

//default route
app.get("/", (req,res) => {
    res.send("<h1>This is my homepage</h1>")
})