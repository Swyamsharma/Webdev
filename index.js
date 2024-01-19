import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
var blog_title = [];
var blog_content = [];
var index = 0;
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});
app.post("/submit", (req, res) => {
  if (req.body["blog-title"] && req.body["blog-content"]) {
    blog_title.push(req.body["blog-title"]);
    blog_content.push(req.body["blog-content"]);
  };
  res.render("index.ejs", { blog_content, blog_title});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
