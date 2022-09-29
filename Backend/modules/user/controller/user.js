import userModel from "../../../DB/model/User.js";

export const getAllUsers = async(req, res)=>{
    try {
        const users = await userModel.find().select('-password')
        res.json({message : "Done", users})
    } catch (error) {
        res.json({message: 'catch error', error})
    }
}
export const updateUser = async(req, res)=> {
    const {id} = req.params
    try {
        const user = await userModel.findByIdAndUpdate(id, req.body, {
            new : true
        })
        res.json({message : 'Done', user})
    } catch (error) {
        res.json({message: 'catch error', error})
    }
}
export const deleteUser = async(req, res)=> {
    const {id} = req.params
    try {
        const user = await userModel.findByIdAndDelete(id)
        res.json({message : 'Done', user})
    } catch (error) {
        res.json({message: 'catch error', error})
    }
}