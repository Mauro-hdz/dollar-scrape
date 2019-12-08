const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
 url: {type: String, required: true},
title: {type: String, required: true},
summary: {type: String},
note: {type: String} 
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;