// import mongoose

const mongoose=require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/helmet')

// model for collection

const User=mongoose.model('User',{
    fname:String,
    uname:String,
    email:String,
    phone:Number,
    psw:String
})

// =======================
// model for product

const Product=mongoose.model('Product',{
    id: Number,
    name: String,
    category: String,
    description: String,
    price: Number,
    image: String,
    isAvailable: Boolean,
    rating: Number
})

// exports
module.exports={
    User, Product
}