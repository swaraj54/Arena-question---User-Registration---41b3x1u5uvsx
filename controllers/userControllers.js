const users = require("../models/user.js");

/*
Post request json file structure


    obj =  {
        "name":name,
        "email":email,
        "password": password
    }

 */

//You need to complete the route of user register
//you need to register the user and return the id assign to the user.
//you will get error if user mail allready exist in that case you need to return 404 status with err message that you get.
//to look the user schema look ../models/user.js

const registerUser = async (req, res) => {

    //Write you code here
    try {
        const { name, email, password } = req.body;
        if (!name) return res.status(400).send("Name is required.");
        if (!email) return res.status(400).send("Email is required.");
        if (!password) return res.status(400).send("Password is required.")

        const user = new users({
            name: name,
            email: email,
            password: password
        })
        const responseFromDB = await user.save();
        return res.send(responseFromDB._id);

    } catch (error) {
        return res.json({
            status: 404,
            message: error.message
        })
    }

}

module.exports = { registerUser };