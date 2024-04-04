import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let natlikinari = [];


//Step 3 - Make the styling show up.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.post("/", (req, res) => {
  const tlikini = req.body["tlikini"];
  natlikinari.push(tlikini);
  res.render("index.ejs", { 
    kargistyvna:natlikinari,
    tlikini:tlikini
   });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});