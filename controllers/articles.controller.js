import Articles from "../models/articles.model.js";


export const addArticles =  async (req, res) => {
    const { title, content} = req.body

    try {
      const newArticles = new Articles({title: title, content: content})
      const savedArticles = await newArticles.save()
      res.status(201).json({ message: 'Text saved successfully', data: savedArticles });
    } catch (error) {
        res.send({status: "error", data:error})
    }

 

}

export const getAllArticles = async (req, res)=> {
    const searchQuery = req.query.search || ""
    try {
      const articles = await Articles.find({
        title: {$regex: searchQuery, $options: "i"}
      });
      res.status(200).json(articles)
      
    } catch (error) {
      console.log("Error in getArticles ", error.message)
      
    }
  
  }
export const editArticle = async (req, res)=> {
    try {
     const {title, content} = req.body;
     const updatedPost = await Articles.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
     res.json(updatedPost)
      
    } catch (error) {
      console.log("Error in updating article ", error.message)
      
    }
  
  }
export const fetchSingleArticle = async (req, res)=> {
    try {
     const article = await Articles.findById(req.params.id)
     res.json(article)
      
    } catch (error) {
      console.log("Error in fetching single article ", error.message)
      
    }
  
  }

  export const deleteArticle = async (req, res)=> {
    try {
      const {id} = req.params;
     const deletedArticle = await Articles.findByIdAndDelete(id)
     if(!deletedArticle){
      return res.status(404).json({message: "Article not found"})
     }
     res.json({message: "Article deleted successfully"})
      
    } catch (error) {
      res.status(500).json({message: "Server error", error})    
    }
  
  }