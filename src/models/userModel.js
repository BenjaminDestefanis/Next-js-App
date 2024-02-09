import mongoose from "mongoose";

// Schema = Descript the form and validation of the data, that can save in the database
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please privide a username"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "Please provide a email"],
        unique: true
    },
    password:{
        type:String,
        required: [true, "Please provide a password"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Data
})


// User - Schema compile in a model
const User = mongoose.models.users || mongoose.model("User", userSchema)

export default User
