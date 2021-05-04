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
var btoa = require('btoa');

require('./api/apiRoute')(app)
require('./api/htmlRoute')(app);
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const scopes = ['wow.profile'];
const redirectUri = 'http://localhost:3000/api/gotCode';
const authorizationRoute = 'https://us.battle.net/oauth/authorize';
const redirectUriString = encodeURIComponent(redirectUri);
const TOKEN_ENDPOINT = 'https://us.battle.net/oauth/token';
    const scopesString = encodeURIComponent(scopes.join(' '));
    app.get("/api/getAccount", (req, res) =>{
            res.redirect(`${authorizationRoute}?client_id=${CLIENT_ID}&scope=${scopesString}&redirect_uri=${redirectUriString}&response_type=code`)
          })
    
    
    app.get("/api/gotCode", async function(req,res) {
        const { code } = req.query;
        console.log('this is code',code)
        const encodedUserInfo = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
        const headers = {
            authorization: `Basic ${encodedUserInfo}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        
        var config = {
                    method: 'POST',
                    
                    params: {
                        redirect_uri: redirectUri,
                        scope: "wow.profile",
                        grant_type: 'authorization_code',
                        code: code
                    },
                    headers
                       
                  }
                     await axios(TOKEN_ENDPOINT,config)
                  .then(  await function (response) {
                    // const responseData =  response.json();
                     console.log(response)
                  })
                  .catch(function (error) {
                    console.log(error)
                  });
    })






app.listen(PORT, () => {
    console.log("app is listening on: ", PORT)
})