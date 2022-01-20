const connection = require("../connection/connection")
const model = require("../models/model")

const controllers = {
  get:async(req,res)=>{
    await connection.connect()
    console.log("coneccion correcta")
    res.send("respuesta del server")
    },
    post:async(req,res)=>{
      await connection.connect()
      console.log("coneccion correcta con post")
      model.modelo.create(req.body,(err,doc)=>{
        res.send(doc)
        console.log(err)
        console.log({doc},"post")
      })
      console.log(req.body)

      }
}

exports.get = controllers.get

exports.post = controllers.post