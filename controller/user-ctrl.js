const User = require('../model/user')


createUser = (req, res)=>{
    const body = req.body
    if(!body){
        return res.json({
            success: false,
            error: 'no body'
        })
    }

    // const newUser = new User(body)
    return res.json({
        success: true,
        message: body
    })

}

updateUser = async(res, req)=>{

}

deleteUser = async(res,req)=>{

}

listUser = async(req,res)=>{
    res.send('User crud list')
}

filterUser = async (res,req)=>{

}

module.exports = {
    createUser, 
    updateUser,
    deleteUser,
    listUser,
    filterUser
}


