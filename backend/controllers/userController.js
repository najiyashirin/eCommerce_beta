const Users=require('../models/userModel')



const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    if (user.password !== password) {
      return res.status(400).send("Incorrect password");
    }
    console.log("User logged in:", email);
    res.status(200).send("Login successful");
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Error during login");
  }
};

const signup = async (req, res) => {
  try {

    const { username, email, password } = req.body;
    if (await Users.findOne({email})) {
      return res.json("Email already in use...");
    }
    const user = new Users({ username, email, password });
    await user.save();
    console.log("User added:", req.body);
    res.status(201).json("User saved successfully");
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json("Error saving user");
  }
};


module.exports={
    signup,
    login
}