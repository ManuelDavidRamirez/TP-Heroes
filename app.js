const express = require("express")
const path = require("path")
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname, "DH-Heroes", "public")))

app.get("/", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes", "views", "index.html"))
})

app.get("/babbage", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes", "views", "babbage.html"))
})

app.get("/berners-lee", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes","views", "berners-lee.html"))
})

app.get("/clarke", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes", "views", "clarke.html"))
})

app.get("/hamilton", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes","views", "hamilton.html"))
})

app.get("/hopper", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes", "views", "hopper.html"))
})

app.get("/lovelace", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes", "views", "lovelace.html"))
})

app.get("/turing", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes", "views", "turing.html"))
})

app.get("*", (req,res) => {
    return res.sendFile(path.join(__dirname, "DH-Heroes", "views", "notFound.html"))
})

app.listen(port, () => console.log(`server running on port ${port}`))