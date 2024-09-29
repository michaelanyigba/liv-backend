import Image from "../models/post.model.js";

export const Post =  async (req, res) => {
    const {base64, title, desc} = req.body

    try {
      await Image.create({image: base64, title: title, desc: desc})
   
      res.send({status: "ok"})

    } catch (error) {
        res.send({status: "error", data:error})
    }

}

export const getPost = async (req, res) => {
  const searchQuery = req.query.search || ""
    try {
      await Image.find({
        title: {$regex: searchQuery, $options: "i"}
      }).then(data=> {
        res.send({status: "ok", data: data})
      })
    } catch (error) {
        res.send({status: "error", error})

    }
}

export const fetchSinglePost = async (req, res)=> {
  try {
   const post = await Image.findById(req.params.id)
   res.json(post)
    
  } catch (error) {
    console.log("Error in fetching single post ", error.message)
    
  }

}

export const updatePost =  async (req, res) => {
  const {id} = req.params;
  const{base64, title, desc} = req.body

  try {
   const post = await Image.findByIdAndUpdate(id,{image: base64, title, desc}, {new: true})

   if (post) {
    res.status(200).json({ success: true, message: 'Post updated successfully', post });
  } else {
    res.status(404).json({ success: false, message: 'Post not found' });
  }
 
    // res.send({status: "ok", post})

  } catch (error) {
      res.send({status: "error", data:error})
  }

}

export const deletePost = async (req, res)=> {
  try {
    const {id} = req.params;
   const deletedPost = await Image.findByIdAndDelete(id)
   if(!deletedPost){
    return res.status(404).json({message: "Post not found"})
   }
   res.json({message: "Post deleted successfully"})
    
  } catch (error) {
    res.status(500).json({message: "Server error", error})    
  }

}