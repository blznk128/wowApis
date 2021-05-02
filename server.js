const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080 ;
var cors = require('cors')

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

require('./api/apiRoute')(app)
require('./api/htmlRoute')(app);

app.listen(PORT, () => {
    console.log("app is listening on: ", PORT)
})