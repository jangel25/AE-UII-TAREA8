var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
var User=mongoose.model('User2',schema,'users2');

var user=new User({
    name:'John Smith',
    email:'john@smith.io'
});

user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("saved!");
    proccess.exit(0);
});

/*
1.- inicializar npm: npm init / npm init --yes
2.- instalar 'mongoose' npm install --save mongoose
*/