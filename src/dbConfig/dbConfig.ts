import mongoose from "mongoose";

export async function connect(){
    try{
        //console.log(process.env.MONGO_URL)
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected succesfuly!')
        })

        connection.on('error', (error) => {
            console.log('MongoDB connection error. Please make soure mongoDB is running. ' + error)
            process.exit()
        })

    } catch (error){
        console.log("Sometiee goes wrong!")
        console.log(error)
    }
}

//