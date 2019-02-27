var mongoose = require('mongoose');

module.exports=new mongoose.Schema({
    name:{
        type:String,
        required: true //exceptuando el tipo, cualquiera de las funciones puede contener una función boolean
    },
    email:{
        type:String,
        required:true,
        match: /.+@.+\..+/,
        lowercase:true
    }

});