
const signUp = async(req,res)=>{

    const {email,newPassword,confirmNewPassword} = req.body;
    if(!email || !newPassword || !confirmNewPassword){
        return res.status(401).json({
            success:false,
            message: "Please enter all fields"
        });
    }
    if(newPassword!==confirmNewPassword){
        return res.status(401).json({
            success:false,
            message: "Password doesn't match"
        })
    }
  const user = await User.create(email,newPassword);
    return res.status(201).json({
        success:true,
        message: "User Created Successfully",
        user
    })
}