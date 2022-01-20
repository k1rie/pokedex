const express = require("express")

const app = express()

const index = require("./routes/index.routes")

app.use(express.urlencoded({ extended: true }));

app.use(index.get)

app.use(index.post)

app.listen(3000,()=>{
  console.log("servidor a la espera de peticiones")
})