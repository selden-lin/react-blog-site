var blogModel = require("../models/blogModel");
const ObjectId = require('mongodb').ObjectId;

module.exports.blogGetAll = function(req, res, next) {
    blogModel.find({}, function(err, docs) {
        if(err) {
            res.status = 500;
            res.send(err);
        } else {
            res.status = 200;
            res.send(docs);
        }
    });
}

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
        if(err) {
            res.status = 500;
            res.send(err);
        } else {
            res.status = 200;
            res.send("done");
        }
    });
};

module.exports.blogGet = function(req, res, next) {
    blogModel.find({"_id": ObjectId(req.params.id)}, function(err, docs) {
        if(err) {
            res.status = 500;
            res.send(err);
        } else if(docs.length == 0) {
            
            res.status = 404;
            res.send("Blog not found refresh the page");
        } else {
            res.status = 200;
            res.send(docs);
        }
    });
};

module.exports.blogEdit = function(req, res, next) {
    blogModel.findOneAndUpdate({"_id": ObjectId(req.params.id)},
    req.body,
    function(err, docs) {
        if(err) {
            res.status = 500;
            res.send(err);
        } else if(docs.length == 0) {  
            res.status = 404;
            res.send("Blog not found refresh the page");
        } else {
            res.status = 200;
            res.send("done");
        }
    });
};

module.exports.blogDelete = function(req, res, next) {
    blogModel.deleteOne({"_id": ObjectId(req.params.id)}, function(err) {
        if(err) {
            res.status = 500;
            res.send(err);
        } else {
            res.status = 200;
            res.send("done");
        }
    });
};
