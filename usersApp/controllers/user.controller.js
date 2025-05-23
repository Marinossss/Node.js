const User = require('../models/user.model')
const userService = require('../services/user.services')
const bcrypt = require('bcrypt');

const logger = require('../logger/logger')

exports.findALL = async(req, resp) => {
    console.log("Find all users from collection users")

    try {
        // const result = await User.find();
        const result = await userService.findAll();
        resp.status(200).json({status: true, data: result});
        logger.info("Success in reading all users")
           logger.warn("Success in reading all users")
           logger.error("Message with error")
    } catch(err) {
        console.log("Problem in reading users", err)
        logger.error("ERROR, Problem in reading all users", err)
        
        resp.status(404).json({status: false, data: err})
    }
}

exports.findOne = async(req, resp)=> {
    console.log("Find user with specific username")

    let username = req.params.username;

    try {

        // const result = await User.findOne({username: username})
        const result = await userService.findOne(username);

        if (result) {
            resp.status(200).json({status: true, data: result})
        } else {
            resp.status(404).json({status: false, data: "User not exists"})
        }

    } catch(err) {

        console.log("Problem in finding user", err)

        resp.status(400).json({status: false, data: err})

    }
}

exports.create = async(req, resp) => {
    console.log("Create User");

    let data = req.body;

    const saltorRounds = 10;

    let hashedPassword = "";

    if (data.password) {
        hashedPassword = await bcrypt.hash(data.password, saltorRounds) 
    } 
    const newUser = new User({
        username: data.username,
        password: hashedPassword,
        name: data.name,
        surname: data.surname,
        email: data.email,
        address: {
            area: data.address.area,
            road: data.address.road
        }
    });

    try {
        const result = await newUser.save();

        resp.status(200).json({status:true, data: result});
    } catch (err) {
        console.log("Problem in creating", err);
        resp.status(400).json({status: false, data: err});
    }
}


exports.update = async(req, resp) => {
    const username = req.body.username;
  
    console.log("Update user with username", username);
  
    const updateUser = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      address: {
        area: req.body.address.area,
        road: req.body.address.road
      }
    };
  
    try {
      const result = await User.findOneAndUpdate({username: username}, //Πρώτο όρισμα: Ποιον χρήστη ψάχνουμε;
        updateUser,  //Δεύτερο όρισμα: Ποιες τιμές θέλουμε να ενημερώσουμε;
        {new:true}); //Τρίτο όρισμα: Επιστρέφει το νέο αντικείμενο αντί για το παλιό.
      resp.status(200).json({status:true, data:result});
    } catch (err) {
      console.log("Problem in updating user", err);
      resp.status(400).json({status:false, data: err});
    }
}


exports.deleteByUsername = async(req, resp) => {
    const username = req.params.username
    console.log("Delete user with username", username);

    try {
        const result = await User.findOneAndDelete({username: username})

        if (!result) {
            return resp.status(404).json({status: false, message: "User not found"});
        }

        resp.status(200).json({status: true, data: result})



    } catch (err) {

        console.log("Problem in deleting user", err);

        resp.status(400).json({status: false, data: err})
    }
}



exports.deleteByEmail = async(req, resp) => {
    const username = req.params.username
    const email = req.params.email
    console.log("Delete user with email", email);

    try {
        const result = await User.findOneAndDelete({email: email})

        if (!result) {
            return resp.status(404).json({status: false, message: "User not found"});
        }

        resp.status(200).json({status: true, data: result})

    } catch (err) {

        console.log("Problem in deleting user", err);

        resp.status(400).json({status: false, data: err})
    }
}    

exports.updateOnlyPassword = async(req, resp) => {
    const username = req.params.username;
    const loggedInUsername = req.user.username;
    const rolesFromToken = req.user.roles || [];
    
    const isAdmin = rolesFromToken.includes('ADMIN');
    const isOwner = username === loggedInUsername;
    
    if (!isAdmin && !isOwner) {
        return resp.status(403).json({message: "Forbidden: You can only change your own password"});
    }
    
    const saltorRounds = 10;
    let hashedPassword = "";
    
    if (req.body.password) {
            hashedPassword = await bcrypt.hash(req.body.password, saltorRounds);
    } else {
        return resp.status(400).json({message: "No password provided"});
    }
    
    const newPassword = {
        password: hashedPassword
    }
    
    try {
        const result = await User.findOneAndUpdate({username}, newPassword, {new:true})
    
        if (result) {
            return resp.status(200).json({message: "Password updated successfully", user: result})
        } else {
            return resp.status(404).json({message: "User not found"})
        }
    } catch (error) {
        console.log("Error during password update", error)
        return resp.status(500).json({message: "An error occurred", error})
    }
}

exports.checkDuplicateEmail = async(req, res) => {
  const email = req.params.email;
 
  console.log("Check for duplicate email address", email);
  try {
    const result = await User.findOne({ email: email });
    if (result) {
        
        res.status(400).json({ status: false, data: result });
    } else {
        res.status(200).json({ status: true, data: result });
    }
  } catch (err) {
        res.status(400).json({ status: false, data: err });
        console.error(`Problem in finding email address: ${email}`, err);
  }
}

