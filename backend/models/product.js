const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const ProductSchema = new Schema({
    title: { type: String, requried: true },
    price: { type: Number, requried: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    user: { type:  Schema.Types.ObjectId, ref: 'User', required: true }
});

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);

module.exports = { User, Product };