import { connect } from '@/dbConfig/dbConfig'
import User from '@/models/userModel' 
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

// new COMMIT
export async function GET( request : NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody)

        // check if user exits

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User dos not exist"}, {status: 400})
        }


        
    } catch (error : any) {
        return NextResponse.json({error: error.message})
    }
}