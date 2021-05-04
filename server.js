require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000 ;
var axios = require('axios');
var cors = require('cors');
const { json } = require('body-parser');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

require('./api/apiRoute')(app)
require('./api/htmlRoute')(app);
const CLIENT_ID = process.env.CLIENT_ID;
    const scopes = 'wow.profile';
    const redirectUri = 'http://localhost:3000/api/gotCode';
    const authorizationRoute = 'https://us.battle.net/oauth/authorize';
    const redirectUriString = encodeURIComponent(redirectUri);
    // const scopesString = encodeURIComponent(scopes.join(' '));
    app.get("/api/getAccount", (req, res) =>{
            res.redirect(`${authorizationRoute}?client_id=${CLIENT_ID}&scope=${scopes}&redirect_uri=http://localhost:3000/api/gotCode&response_type=code`)
          })
    
    
    app.get("/api/gotCode", async function(req,res) {
        const { code } = req.query;
        console.log('this is code',code)
        console.log("code")
    })









// app.get("/api/getAccount", (req,res) => {
//     // const authorizeUrl = "https://us.battle.net/oath/authorize?client_id="+CLIENT_ID+"&scope="+scopesString+"&redirect_uri="+redirectUriString+"&response_type=code";
//     const authorizeUrl = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scopesString}&redirect_uri=${redirectUriString}&response_type=code`;
//     res.redirect(authorizeUrl)
//     console.log(CLIENT_ID)
//   })

//   app.get("/api/gotCode", async function(req,res) {
//     const { code } = req.query;
//     console.log('this is code',code)
//     console.log("code")
// })


app.listen(PORT, () => {
    console.log("app is listening on: ", PORT)
})