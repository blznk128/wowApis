const path = require('path');
module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../index.html"))
    });

    app.get("/oath", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/oath.html"))
    });

}