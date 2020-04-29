const mongoose = require('mongoose');
const pass = "mongodb://selden:a123456@ds247944.mlab.com:47944/reactblogdb";
mongoose.connect(pass, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

let blogSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    date: Date,
    image: String
});

let blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;