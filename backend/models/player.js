const mongoose = require('mongoose');
const playerSchema = mongoose.Schema(
    {
        
        name: String,
        poste: String,
        age: String,
        numero: String,
        description: String
    }
)
const player = mongoose.model('Player', playerSchema);
module.exports = player;