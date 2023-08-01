// import model

const db =require('./db')

// register logic

register=(fname,uname,email,phone,psw)=>{
    return db.User.findOne({phone:phone}).then(user=>{
        if(user){

            return{
                message:'user already present',
                status:false,
                statuscode:404
            }
        }
        else{
            newuser=new db.User({
                fname,
                uname,
                email,
                phone,
                psw
            })

            // to reflect changes
            newuser.save()

            return{
                message:'register success',
                status:true,
                statuscode:200
            }

        }
    })
}

// login logic

login=(phone,psw)=>{
    return db.User.findOne({phone,psw}).then(user=>{
        if(user){
            return {
                message:'login success',
                status:true,
                statuscode:200,
                currentUser:user.uname,
                currentPhone:phone

            }
        }
        else{
            return{
                message:'incorrect phone or password',
                status:false,
                statuscode:404
            }
        }
    })
}


// getAll api

getAllProduct =()=>{
    return db.Product.find({}).then(result=>{
        if(result){
            return{
                message: result,
                status: true,
                statuscode: 200
            }
        }
        else{
            return{
                message: "not found in backend",
                status: false,
                statuscode: 404
            }

        }
    })
}

// export
module.exports={
    register,login,getAllProduct
}