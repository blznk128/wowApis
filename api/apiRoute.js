require('dotenv').config();
var axios = require('axios');
module.exports = (app) => {
    const CLIENT_ID = process.env.CLIENT_ID;
    const scopes = ['wow.profile'];
    const redirectUri = 'http://localhost:3000/gotCode';
    const AUTHORIZE_ENDPOINT = 'https://us.battle.net/oauth/authorize';
    const redirectUriString = encodeURIComponent(redirectUri);
    const scopesString = encodeURIComponent(scopes.join(' '));

    // app.get("/api/getAccount", (req,res) => {
    //   // const authorizeUrl = "https://us.battle.net/oath/authorize?client_id="+CLIENT_ID+"&scope="+scopesString+"&redirect_uri="+redirectUriString+"&response_type=code";
    //   const authorizeUrl = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scopesString}&redirect_uri=${redirectUriString}&response_type=code`;
    //   res.redirect(authorizeUrl)
    //   console.log(CLIENT_ID)
    // })

    // app.get("/api/getAccount", (req, res) =>{
    //     var config = {
    //         method: 'get',
    //         url: AUTHORIZE_ENDPOINT,
    //         params: {
    //             client_id: CLIENT_ID,
    //             scope: "wow.profile",
    //             redirect_uri: 'http://localhost:3000/gotCode',
    //             response_type: "code"
    //         }
    //       };
          
    //       axios(config)
    //       .then(function (response) {
    //         // console.log(JSON.stringify(response.data));
    //         console.log("sucess")
    //         console.log('client id',CLIENT_ID);
    //         res.redirect("/api/gotCode")
    //       })
    //       .catch(function (error) {
    //         console.log("error")
    //       });
    // })
    
    // app.get("/api/gotCode", async function(req,res) {
    //     const { code } = req.query;
    //     console.log('this is code',code)
    //     console.log("code")
    // })
}

// var config = {
//   method: 'get',
//   url: 'https://us.battle.net/oauth/authorize?client_id=aba192923781479bb3a7cc0aea5a4ec8&scope=wow.profile&redirect_uri=http://localhost:3000/gotCode&response_type=code',
  
// };
// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });