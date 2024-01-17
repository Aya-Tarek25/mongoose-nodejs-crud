const User = require("../models/User");


const Register = async (_userName, _password,_firstName) => {
    try {
        let data = await User.create({ userName: _userName, password: _password,firstName: _firstName  });
        if (data) {
            console.log("user was registered successfully")
        }
        else {
            console.log("not registered");
        }
    }
    catch (e) {
        console.log(e);

    }

}


const Login = async (_userName, _password) => {
    try {
        let data =await User.find({ password: _password, userName: _userName });
        if (data) {
            console.log(`logged in successfully,userName: ${data.userName}` );
        }
    }
    catch (e) {
        console.log(e);
    }

}

const getAllUsers =async () => {
    try {
        let data = await User.find({},{firstName:1,_id:0});
        if (data) {
            console.log(data);
        }
    }
    catch (e) {
        console.log(e);
    }


}

const deleteUser =async (_userName) => {
    try {
        let data = await User.deleteOne({userName:_userName});
        
        if (data) {
            console.log("deleted");
        }
    }
    catch (e) {
        console.log(e);
    }

}
 const editUser=async (_userName,_newuserName,_password,_firstName) => {
     try {
         let data = await User.updateOne({userName:_userName},{userName:_newuserName,password:_password,firstName:_firstName})
         if (data) {
             console.log(`user was edited successfully”,userName: ${data.userName}`);
         }
     }
     catch (e) {
         console.log(e);
     }
 
 }

module.exports = { Register, Login, getAllUsers,deleteUser,editUser};