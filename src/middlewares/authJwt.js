import jwt from 'jsonwebtoken'
import config from '../config'
import Usuario  from '../Model/Usuario'

export const verifyToken = async (req, res, next) => {
   try{
    const token = req.headers["access-token"];

    if(!token) return res.status(403).json({message: "no se proporciono el token"})

    const decoded = jwt.verify(token,config.SECRET)
    req.usuarioId = decoded.id;

    const user = await Usuario.findById(req.usuarioId, {contrasenia: 0})
    if (!user) return res.status(404).json({message: "Usuario no encontrado"})

    next()
   }catch(error){
    return res.status(401).json({message: "no autorizado"})
   }
}

