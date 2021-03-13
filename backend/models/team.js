const mongoose = require('mongoose');
const teamSchema = mongoose.Schema(
    {
        
        name: String,
        country: String,
        foundation: String,
        stadium: String

    }
)
const team = mongoose.model('team', teamSchema);
module.exports = team;