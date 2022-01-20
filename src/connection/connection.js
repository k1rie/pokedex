const mongoose = require("mongoose")

const uri = `mongodb+srv://diego:${"yourpassword"}@cluster0.lss4w.mongodb.net/${"yourdatabasename"}?retryWrites=true&w=majority`



exports.connect = ()=> mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})