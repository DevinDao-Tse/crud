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

module.exports = {
    createUser
}


