import express from "express";
import home from "./routes/home";
import about from "./routes/about";
import contact from "./routes/contact";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/home", home);
app.use("/about", about);
app.use("/contact", contact);

app.listen(3000);
