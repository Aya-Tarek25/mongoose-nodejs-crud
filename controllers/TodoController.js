const { object } = require("webidl-conversions");
const User = require("../models/User");
const Todo = require("../models/todo");
const { error } = require("console");


const createTodo = async (_userName,_title,_tags) => {
    try {
        
        let selecteduser = await User.findOne({userName:_userName},{_id:1});
        let data = await Todo.create({id:selecteduser,title:_title,tags:_tags});
        if (data) {
            console.log(data)
        }
        else {
            console.log("not created");
        }
    }
    catch (e) {
        console.log(e);

    }

}

const getTodos = async (userid) => {
    try {
        let data = await Todo.findOne({_id:userid});
        if (data) {
            console.log(data)
        }
        else {
            console.log("not Found");
        }
    }
    catch (e) {
        console.log(e);

    }

}



const editTodo =async (id,_newtitle) => {
    try {
        
        let data = await Todo.updateOne({_id: id },{ title: _newtitle});
      
        if (data) {
            console.log(data);
        }else{
            console.log("error with editing",error.message);
        }
    }
    catch (e) {
        console.log("error from connecting with editing",error.message);
    }

}


const deleteTodo =async (_title) => {
    try {
        let data = await Todo.deleteOne({title:_title});
        
        if (data) {
            console.log("todo deleted");
        }
    }
    catch (e) {
        console.log(e);
    }

}

module.exports = {createTodo,getTodos,editTodo,deleteTodo};