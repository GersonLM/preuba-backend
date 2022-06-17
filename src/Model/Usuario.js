import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs/dist/bcrypt";

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    email: 
    {
        type: String,
        unique: true
    },
    contrasenia: String,
    telefono: Number
},
{
    versionKey: false
}
)

usuarioSchema.statics.encryptContrasenia = async ( contrasenia) => {
     const salt = await bcrypt.genSalt(10);
     return await bcrypt.hash(contrasenia, salt)
}

usuarioSchema.statics.compareContrasenia = async ( contrasenia, receivedcontrasenia) => {
    return await bcrypt.compare(contrasenia, receivedcontrasenia)
}

export default model("Usuario", usuarioSchema)