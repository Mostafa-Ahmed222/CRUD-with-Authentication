import blogModel from "../../../DB/model/Blog.js";

export const addBlog = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const blog = new blogModel({
      title,
      description,
      price,
      userId: req.authUser._id,
    });
    const saveblog = await (await blog.save()).populate([{
        path : 'userId',
        select : '-_id firstName age email'
    }])
    res.json({message : 'Done', saveblog})
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
export const updateBlog = async (req, res)=>{
    const {id} = req.params
    const {price} = req.body
    try {
        const blog = await blogModel.findOneAndUpdate({_id : id, userId : req.authUser._id}, {price}, {
            new : true
        }).populate([{
            path : 'userId',
            select : 'firstName lastName age email'
        }])
        res.json({message : "Done", blog})
    } catch (error) {
        res.json({message : 'catch error', error})
    }
}
export const deleteBlog = async (req, res)=>{
    const {id} = req.params
    try {
        const blog = await blogModel.findOneAndDelete({_id : id, userId : req.authUser._id}).populate([{
            path : 'userId',
            select : 'firstName lastName age email'
        }])
        res.json({message : "Done", blog})
    } catch (error) {
        res.json({message : 'catch error', error})
    }
}
export const getAllBlogs = async(req, res)=>{
    try {
        const blogs = await blogModel.find().populate([{
            path : 'userId',
            select : '-_id firstName lastName email',
            match : {age : {$gt : 24}}
        }])
        res.json({message: "Done", blogs})
    } catch (error) {
        res.json({message : 'catch error', error})
    }
}
