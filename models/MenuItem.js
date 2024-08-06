// const { uniqueId } = require('lodash');
const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    pirce:{
        type:Number,
        requird: true
    },
    taste:{
        type: String,
        enum:['Sweet','Spicy','Sour'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default:[]
    },
    num_sales:{
        type: Number,
        default: 0
    }
});

const MenuItem = mongoose.model('menuItem',menuItemSchema);
module.exports = MenuItem;

