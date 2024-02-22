import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const sendEmail = async({email, emailType, userId} : any) => {
    try{

        // create hashToken
        const hashToken = bcryptjs.hash(userId.toString(), 10)

        await User.findByIdAndUpdate(userId,
             {
            verifyToken: hashToken,
            verifyTokenExpiry: Date.now() + 3600000
             }/* ,
             {
            new: true,  runValidators: true
             } */)
    } catch (error : any){
        throw new Error(error.message)
    }
}
