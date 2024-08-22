const express = require("express");
const app = express();
const port = 5000;
require("./db");

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "https://aeroquestuav.com");
  res.header(
    "Access-Control-Allow-Headers",
    "origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})

app.use(express.json());

app.use('/api', require("./Routes/Contact"));

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
