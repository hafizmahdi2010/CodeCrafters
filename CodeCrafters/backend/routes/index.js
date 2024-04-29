var express = require('express');

const multer = require('multer');
const path = require('path');

var router = express.Router();
var userModel = require("../models/userSchema")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// sign Up
router.post("/signUpUser", async (req, res) => {
  let emailCon = await userModel.find({ email: req.body.email });
  let numberCon = await userModel.find({ number: req.body.number });
  console.log(emailCon.length, numberCon.length)
  if (emailCon.length != 0) {
    return res.json({
      fale: 1,
      msg: "Email Is Already Registered !"
    })
  }
  if (numberCon.length != 0) {
    return res.json({
      fale: 1,
      msg: "Number Is Already Registered !"
    })
  }
  else {
    let users = await userModel.find({});
    let id;
    if (users.length > 0) {
      let last_user_array = users.slice(-1);
      let last_user = last_user_array[0];
      id = last_user.id + 1;
    }
    else {
      id = 1
    }

    let regesteredUser = await userModel.create({
      id: id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      number: req.body.number,
    })
    console.log(regesteredUser);
    res.json(regesteredUser)
  }
})

// login

router.post("/loginUser", async (req, res) => {
  let user = await userModel.find({ username: req.body.username, password: req.body.password });
  if (user.length != 0) {
    console.log(user[0].id)
    return res.json({
      success: 1,
      email: user[0].email,
      username: user[0].username,
      userId: user[0].id
    })
  }
  else {
    return res.json({
      fale: 1,
      msg: "Username And Password Is Wrong !"
    })
  }
})

// logout user

router.post("/logoutUser", async (req, res) => {
  let user = await userModel.find({ id: req.body.id, email: req.body.email })
  if (user.length != 0) {
    return res.json({
      success: 1,
      mode: "Logout",
      username: user[0].username,
      email: user[0].email,
      userId: user[0].id
    })
  }
  else {
    return res.json({
      fale: 1,
      msg: "No Information Found"
    })
  }
})



// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
}).single('image'); // 'image' is the name attribute of the file input field in your HTML form


// Route for file upload
router.post('/addTemplate', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      res.send('Error uploading file.');
    } else {
      if (req.file === undefined) {
        res.send('No file selected.');
      } else {
        console.log(req.file.filename)
        res.send('File uploaded successfully.');
      }
    }
  });
});

module.exports = router;
