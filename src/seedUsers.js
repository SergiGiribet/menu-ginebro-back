const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();
const users = require("./users.json"); 

mongoose.connect(process.env.MONGO_URI, {
  dbName: "menu-ginebro",
}).then(async () => {
  console.log("MongoDB Connected. Inserting users...");
  await User.insertMany(users);
  console.log("Users added successfully!");
  mongoose.connection.close();
}).catch(err => console.error(err));
