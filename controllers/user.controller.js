import User from "../models/user.model.js";
import jwt, { decode } from "jsonwebtoken"


export const getUsersForSidebar = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")

        res.status(200).json(filteredUsers)
        
    } catch (error) {
        console.error("Error in getUsersForSidebar", error.message)
        
    }
}


export const getAllUsers = async (req, res)=> {
  const searchQuery = req.query.search || ""
  try {
    const users = await User.find({
      username: {$regex: searchQuery, $options: "i"}
    });
    res.status(200).json(users)
    
  } catch (error) {
    console.log("Error in getUsers ", error.message)
    
  }

}


export const getSingleUser = async (req, res)=> {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
    
  } catch (error) {
    console.log("Error in getUser ", error.message)
    
  }

}
export const getOnlyAdmin = async (req, res)=> {
  try {
    const user = await User.find({isAdmin: true});
    res.status(200).json(user)
    
  } catch (error) {
    console.log("Error in getUser ", error.message)
    
  }

}

export const updateUser = async (req, res)=> {
  const {fullName, username, email, dob, bio, gender} = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id,{fullName, username, email, dob, bio, gender},
      {new: true}// return the update document
    );
    res.status(200).json(user)
    
  } catch (error) {
    console.log("Error in updating user ", error.message)
    
  }

}


export const deleteUser = async (req, res, next)=> {
  try {
    const {id} = req.params;
   const deletedUser = await User.findByIdAndDelete(id)
   res.json({message: "User deleted successfully"})
    
  } catch (error) {
    res.status(500).json({message: "Server error", error})    
  }
  next()

}

