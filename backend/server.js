const express = require("express");
const app = express();
const port = 6969;
const mongoose = require('mongoose');
const cors=require('cors')

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/Aesthetix');

const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')

app.use("/",userRoutes)
app.use('/products',productRoutes)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`SERVER RUNNING AT ${port}`);
});
