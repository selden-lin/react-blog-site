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

module.exports.blogAdd = function(req, res, next) {
    req.body.date = new Date(req.body.date);
    let newBlogInstance = new blogModel(req.body);

    // make sure title, summary, content, date is filled out
    if(req.body.title == "" ||
    req.body.summary == "" ||
    req.body.content == "" || 
    req.body.date == "" ||
    req.body.image == "") {
        res.send("Please fill in all fields");
    } 

    newBlogInstance.save(function(err) {
       
    });
    res.send("done");
};

module.exports.blogGet = function(req, res, next) {
    res.send("blog "+req.params.id);
};

module.exports.blogEdit = function(req, res, next) {
    res.send("blog ");
};

module.exports.blogDelete = function(req, res, next) {
    res.send("blog ");
};
