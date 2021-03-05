const express = require("express");
const app = express()

const PORT = process.env.PORT ||  7261;

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

require("./routes/apiRoutes")(app)
require("./routes/HTMLroutes")(app)
 
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "/index.html"));
});

app.listen(PORT,  function() {
  console.log(` http://localhost:${PORT}`);
});


