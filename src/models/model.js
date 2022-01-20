const mongoose = require("mongoose")

const Schema = mongoose.Schema

const pokemonmodel = new Schema(
  {
    name:{
      type: String,
      unique: true
    }
    },
    {
      versionKey: false
    }
)

const model = mongoose.model("pokemons",pokemonmodel)

exports.modelo = model