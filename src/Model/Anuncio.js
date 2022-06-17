import { Schema, model } from "mongoose";
import Usuario from "./Usuario";

const anuncioSchema = new Schema({
    usuario: {type: Schema.Types.ObjectId, ref: "Usuario"},
    propiedad: {type: Schema.Types.ObjectId, ref: "Propiedad"},
    moneda: String,
    precio: Number,
    descripcion: String,
    imgUrl: String
},
{
    versionKey: false
})


export default model('Anuncio', anuncioSchema);
