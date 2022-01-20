const express = require("express")

const controllers = require("../controllers/controllers")

const router = express.Router()


const get = router.get("/",controllers.get)

const post = router.post("/",controllers.post)

exports.get = get

exports.post = post