import { User } from "../model/user_model.js";

export const createUser = async(req, res) => {
try {
    const { name, email, password} = req.body;

    //Simple Validation
    if( !name ||  !email || !password){
        return res.status(400).json({
            success : false,
            message : "Please provide the name, email and password"
        })
    }

    //Check if user Exist
    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(400).json({
            success : false,
            message : "Already user exist with this email"
        })
    }

    //Create New User
    const user = await User.create({name, email, password})
    res.status(201).json({
        success : true,
        message : "User created Successfully",
        data : user,
    })
} catch (error) {
    res.status(500).json({
        success : false,
        message : "Error Creating User",
        error : error.message,
    })
}
}


//Get All User
export const getAllUser = async (req, res) => {
    try {
         const user = await User.find()
         res.status(201).json({
            success : true,
            count : user.length,
            data : user
         })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Error Fetching User",
            error : error.message,
        })
    }
}

