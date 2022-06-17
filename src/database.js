import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/anunciosdb", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("conexios exitosa a la Base de Datos"))
    .catch(error => console.log(error))