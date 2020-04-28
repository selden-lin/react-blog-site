module.exports.blogAdd = function(req, res, next) {
    res.send("blog");
};

module.exports.blogGet = function(req, res, next) {
    res.send("blog"+req.params.id);
};

module.exports.blogEdit = function(req, res, next) {
    res.send("blog");
};

module.exports.blogDelete = function(req, res, next) {
    res.send("blog");
};
