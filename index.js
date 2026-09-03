import express from "express"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT || 5000

const app = express()

app.get("/health", (req, res) => {
    return res.status(200).json({ message: "All is good"})
})

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello Vallen!"})
})

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})

