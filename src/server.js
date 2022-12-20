const express = require("express");
const cors = require("cors");
const app = express();
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
app.use(cors());

app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
  res.json({ message: "Welcome to anucha api." });
});

require("./routes/auth.routes.js")(app);


const PORT = process.env.PORT || 9002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
