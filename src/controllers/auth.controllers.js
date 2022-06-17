import Usuario from '../Model/Usuario'
import jwt from 'jsonwebtoken'
import config from '../config'

//INCIAR SECION
export const login = async ( req, res) => {
    
    const usuarioE = await Usuario.findOne({email: req.body.email})

    if(!usuarioE) return res.status(400).json({message: "Usuario no encontrado"})
    
    const matchPassword = await Usuario.compareContrasenia(req.body.contrasenia, usuarioE.contrasenia)

    if(!matchPassword) return res.status(400).json({token: null, message: "Contraseña inccorecta"})

    const token = jwt.sign({id: usuarioE._id}, config.SECRET, { expiresIn: 86400}) //expira en 24horas 

    res.status(200).json({token});
}

//REGISTRAR UN USUARIO
export const registrar = async (req, res) => {
    const { nombre, apellido, email, contrasenia, telefono} = req.body;
    const usuarioE = await Usuario.findOne({email: req.body.email})

    if(usuarioE) return res.status(400).json({message: "Correo no disponible"})

    const usuarioExistente = Usuario.find( {email} )
    
    const newUsuario = new Usuario({
        nombre,
        apellido,
        email,
        contrasenia: await Usuario.encryptContrasenia(contrasenia),
        telefono
    })
    
    const usuarioGuardado = await newUsuario.save();

    const token = jwt.sign({id: usuarioGuardado._id}, config.SECRET, { expiresIn: 86400}) //expira en 24horas    

    res.status(200).json({token}) 
}

