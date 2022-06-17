import Usuario from '../Model/Usuario'

export const getUsuarios= async (req, res) => {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios)
}

export const getUsuarioId = async ( req, res) => {

    const usuario = await Usuario.findById(req.params.usuarioId);

    res.status(200).json(usuario)
}
