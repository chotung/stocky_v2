require("dotenv").config()
const express = require("express")
const axios = require("axios")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 8000
const User = require("./models/User")

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ds259518.mlab.com:59518/stocky
`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

//financialmodelingprep.com/api/v3/company/stock/list

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/users", async (req, res) => {
  const allUsers = await User.find({})
  res.json(allUsers)
})


app.post("/users/signup", async (req, res) => {
  // hash and salt the password
  const { username, password, email } = req.body
  const findUserByUsername = await User.find({
    username: username,
  })
  const findUserByEmail = await User.find({
    email: email
  })
  console.log("Username", findUserByUsername)
  console.log("Email", findUserByEmail)
  try {
    if (findUserByUsername.length !== 0) {
      res.send("Username Has Been Taken")
    } else if (findUserByEmail.length !== 0) {
      res.send("This Email Is Already Being Used")
    } else {
      const newUser = await new User({
        username: username,
        password: password,
        email: email
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    }
  } catch (err) {
    res.status(404)
    console.error({ message: err})
    res.send("Please Fill Out All The Fields With Valid Information")
  }
})


app.post("/users/login", async (req, res) => {
  const findUser = await User.findOne({
    username: req.body.username
  })
  // Checks user
  // Check password
  // If password matches up
  // Log them in
  try {
    findUser ? req.body.password === findUser.password ? res.send("passwords matched go ahead") : res.send("Wrong Password") : res.send("Go Sign Up")
  } catch (err) {
    res.status(404)
    console.error({ message: err})
  }
})

app.put("/users/update", async (req, res) => {
  // Get user from sessions/cookie
  // Should credentials be allowed to change???
  try {
    const filter = { username: req.body.username };
    const update = { email: req.body.email, password: req.body.password };
    const updateUser = await User.findOneAndUpdate(filter, update);
    res.json({ message: "Update Successful"});
  } catch (err) {
    res.status(404)
    console.error({ message: "Not authorized"})
  }

})

app.delete("/users/delete", async (req, res) => {
  // Make sure they logged in
  // Delete user from session
  const deletedUser = User.findOneAndDelete({
    username: req.body.username
  });
  console.log(deletedUser);
  res.json({ message: "Account has been deleted" });
});

app.use("/", async (req, res) => {
  // const companyRes = await axios("https://financialmodelingprep.com/api/v3/company/stock/list")
  // const { data } = companyRes
  // res.json(data)
  res.send("Homepage")
});


app.listen(port, console.log(`Server Started on port ${port}`))