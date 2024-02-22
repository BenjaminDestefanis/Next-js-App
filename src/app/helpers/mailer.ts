import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const sendEmail = async({email, emailType, userId} : any) => {
    try{

        // create hashToken
        const hashToken = bcryptjs.hash(userId.toString(), 10)

        if(emailType === "VERIFY"){
            await await User.findByIdAndUpdate(userId,
                {
               verifyToken: hashToken,
               verifyTokenExpiry: Date.now() + 3600000
                })
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId,{
                forgotPasswordToken: hashToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }

        nodemailer.createTrans
       
    } catch (error : any){
        throw new Error(error.message)
    }
}
