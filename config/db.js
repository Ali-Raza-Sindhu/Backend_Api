import mongoose from "mongoose"

export const connectDb =  async() => {
    try {
       const connect = await mongoose.connect(process.env.MONGO_URI, {
        dbName : process.env.DB_NAME
       })

       console.log("Database Connected Successfully")

    } catch (error) {
        console.log("Error in Database Connection ", error.message)
    }
}

