import { Request, Response } from "express";
import userService from "./user.service";

const createUser =async(req:Request,res:Response)=>{
    const {user} = req.body;
    try{
        const result = await userService.createUser(user)
        res.status(200).json({
            success: true,
            message: "User Created Succesfully",
            data: result
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message: "User Create UnSuccessfully"
        })
    }
}

export default {
    createUser
}