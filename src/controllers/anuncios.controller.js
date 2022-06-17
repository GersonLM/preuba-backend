import  Anuncio  from "../Model/Anuncio"

import Propiedad from "../Model/Propiedad"
import Usuario from "../Model/Usuario"
import jwt from 'jsonwebtoken'
import config from '../config'

export const createAnuncio = async (req, res) => {

    const token = req.headers["access-token"];
    const decoded = jwt.verify(token,config.SECRET)
    let usuario = decoded.id

    const {propiedad, moneda, precio, descripcion,  imgUrl} = req.body;
    
    const newAnuncio = new Anuncio({usuario, propiedad, moneda, precio, descripcion, imgUrl})
    const anuncioSave =  await newAnuncio.save()
    res.status(201).json(anuncioSave);
}

export const getAnuncios = async ( req, res) => {
    const anuncios = await Anuncio.find().populate("usuario",{nombre: 1}).populate('propiedad');

    res.status(200).json(anuncios)
}

export const getAnuncioUsuarioId = async ( req, res) => {
    console.log(req.params.usuarioId)
    const anuncios = await Anuncio.find({usuario: req.params.usuarioId}).populate("usuario",{nombre: 1}).populate('propiedad');

    res.status(200).json(anuncios)
}


export const getAnuncioId = async ( req, res) => {

    const anuncios = await Anuncio.findById(req.params.anuncioId).populate("usuario",{nombre: 1}).populate('propiedad');

    res.status(200).json(anuncios)
}

export const updateAnuncio = async ( req, res) => {
    //actualizar solo los datos de el anuncios, los datos de la propiedad se actualizan en su propiedad.controler
    const {nombre, amenidades, moneda, precio, descripcion,  imgUrl} = req.body;
     const anuncioUpdate = await Anuncio.findByIdAndUpdate(req.params.anuncioId, { moneda, precio, descripcion,  imgUrl}, {new: true}).populate("usuario",{_id:0, nombre: 1});

     const propiedadUpdate = await Propiedad.findByIdAndUpdate(anuncioUpdate.propiedad,{nombre, amenidades })
     res.status(201).json(anuncioUpdate)
}

export const deleteAnuncio = async( req, res) => {
    await Anuncio.findByIdAndDelete(req.params.anuncioId);
    res.status(204).json()
}

export const upload = ( req, res) => {
    let fileName = 'imagen no subida';
    console.log(req.files)
    console.log(fileName)

    res.status(204).json({fichero: req.files})
}