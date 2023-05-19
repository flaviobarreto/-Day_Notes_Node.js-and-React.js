const mongoose = require ('mongoose');

const dbConfig ='mongodb+srv://usuario:usuario@cluster0.kdwxoyc.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("mongo conectado");
});

//console.log(connection);

module.exports =connection;
