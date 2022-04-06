const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required:true,
        minlength: 3
    },
    firstname : {
        type: String,
        required:true,
        minlength: 3
    },
    email:{
        type: String,
        required :true,
        unique: [true, "email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    }, 
    password:{
        type: String,
        required: true,
        
    },
    confirmpassword:{
        type: String,
        required: true,
        
    },
    phone: {
        type: Number,
        min:10,
        
        required: true,
        unique: true
    },
    address:{
        type:String,
        required: true,

    }
})

// creating new collection

const Register = new mongoose.model('Register', studentSchema);


module.exports = Register
