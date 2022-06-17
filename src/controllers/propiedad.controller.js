import Propiedad from '../Model/Propiedad'

export const createPropiedad = async (req, res) => {
    const {nombre, amenidades} = req.body;
    const newPriedad = new Propiedad({nombre, amenidades })

    const propiedad = await Propiedad.findOne({nombre: nombre});
    console.log(propiedad)
    if(propiedad) return res.status(400).json({message: "Propiedad ya existe"})

    const propiedadSave = await newPriedad.save();

    res.status(200).json({message: "Propiedad creada", propiedadSave})
}

export const getPropiedades = async (req, res) => {
    const propiedades = await Propiedad.find();
    res.status(200).json(propiedades)
}

export const getPropiedadId = async ( req, res) => {

    const propiedad = await Propiedad.findById(req.params.propiedadId);

    res.status(200).json(propiedad)
}


export const updatePropiedad = async (req, res) => {
    const propiedad = await Propiedad.findByIdAndUpdate(req.params.propiedadId,req.body , {new: true});
    res.status(200).json(propiedad)
}

export const deletepropiedad = async( req, res) => {
    await Propiedad.findByIdAndDelete(req.params.propiedadId);
    res.status(200).json()
}