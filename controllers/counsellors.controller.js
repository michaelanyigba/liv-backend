import Counsellors from "../models/counsellors.model.js";


export const addCounsellors =  async (req, res) => {
    const { name, email, gender, bio, phone} = req.body

    try {
      const newCounsellors = new Counsellors({name: name, email: email, gender:gender, bio:bio, phone:phone})
      const savedCounsellors = await newCounsellors.save()
      res.status(201).json({ message: 'Text saved successfully', data: savedCounsellors });
    } catch (error) {
        res.send({status: "error", data:error})
    }

}

export const getAllCounsellors = async (req, res)=> {
  const searchQuery = req.query.search || ""
  try {
    const users = await Counsellors.find({
      name: {$regex: searchQuery, $options: "i"}
    });
    res.status(200).json(users)
    
  } catch (error) {
    console.log("Error in getUsers ", error.message)
    
  }

}

export const editCounsellor = async (req, res)=> {
  try {
   const {name, email, gender, phone, bio} = req.body;
   const updatedCounsellor = await Counsellors.findByIdAndUpdate(req.params.id, {name, email, gender, phone, bio}, {new: true})
   res.json(updatedCounsellor)
    
  } catch (error) {
    console.log("Error in updating counsellor ", error.message)
    
  }

}
export const fetchSingleCounsellor = async (req, res)=> {
  try {
   const counsellor = await Counsellors.findById(req.params.id)
   res.json(counsellor)
    
  } catch (error) {
    console.log("Error in fetching single counsellor ", error.message)
    
  }

}
export const deleteCounsellor = async (req, res)=> {
  try {
    const {id} = req.params;
   const deletedcounsellor = await Counsellors.findByIdAndDelete(id)
   if(!deletedcounsellor){
    return res.status(404).json({message: "Counsellor not found"})
   }
   res.json({message: "Counsellor deleted successfully"})
    
  } catch (error) {
    res.status(500).json({message: "Server error", error})    
  }

}