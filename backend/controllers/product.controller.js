const mongoose = require('mongoose');
const { Product, User } = require('../models/product');

class ProductController {

    static async getAll(req, res) {
        const products = await Product.find();
        res.json(products);
    }

    static async get(req, res) {
        const id = req.params.id;
        const product = await Product.findById(id).populate('user');
        res.json(product);
    }

    static add(req, res) {
        console.log(req.body);
        
        const data = req.body;

        const user = new User({
            _id: mongoose.Types.ObjectId(),
            username: data.user.username,
            password: data.user.password,
            age: data.user.age
        });

        user.save(err => {
            if (err) {
                console.log(err);
                return;
            }

            const product = new Product({
                title: data.title,
                price: data.price,
                stock: data.stock,
                image: data.image,
                user: user._id
            });

            product.save(err => console.log('Error on Save Product', err));

            user.products.push(product._id);
            
            user.save();
        });

        res.send('ok 200');
    }

    static async delete(req, res) {
        const id = req.params.id;
        await Product.findByIdAndRemove(id);
        res.send('Product removed.');
    }
}

module.exports = ProductController;







