const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/* validation*/
const exerciseSchema = new Schema({
 username: { type : String, required: true},
 description : { type: String, requied: true},
 duration: { type: Number, required: true},
 date: { type : Date, required : true},
},
{
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;