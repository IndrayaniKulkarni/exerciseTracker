//const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* validation*/
const userSchema = new Schema({
 /*field*/  username:{
                 type: String,
                 required: true,
                 unique: true,
                 trim: true,//blank spaces
                 minlength: 3     
            },
     },
     {
    timestamps: true,//updation or created time
      });

const User = mongoose.model('User',userSchema);

module.exports = User;
