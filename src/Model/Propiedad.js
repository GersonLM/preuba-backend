import { Schema, model} from 'mongoose';

const propiedadchema = Schema({
    nombre: String,
    amenidades: [{
        cantBanos: Number,
        cantHabitaciones: Number,
        cantEstacionamientos: Number,
        piscina: Boolean,
        aireAcondicionado: Boolean,
        seguridadPrivada: Boolean,
        jardin: Boolean
    }],
},
{
    versionKey: false
})

export default model('Propiedad', propiedadchema)