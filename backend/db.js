import mongoose from 'mongoose'
mongoose.conect('mongodb://localhost:27017/paytm', {useNewUrlParser: true, useUnifiedTopology: true});
const userTable = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 15,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,

    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },

})

const User = mongoose.model('User', userTable);

export default User;