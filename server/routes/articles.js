const express  = require("express");
const getFuncs = require("../controllers/articles.js");

const router = express.Router();

router.get("/", getFuncs.getArticles);
router.get("/:id", getFuncs.getSingleArticle);

module.exports = router;