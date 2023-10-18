const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    naem: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required:true,
    },
    image: {
        type:String,
        required: true,
    },
});

module.exports = mongoose.model('Product', ProductSchema);