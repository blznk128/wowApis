// const blobHere = $("#here")

$("#getAuthorization").on('click', function(){
    event.preventDefault()
    window.location.href = "/oath"
// $.ajax({
//     url: "https://us.battle.net/oauth/authorize",
//     method: "GET",
//     data: {
//         client_id: "aba192923781479bb3a7cc0aea5a4ec8",
//         scope: "wow.profile",
//         redirect_uri: "http://localhost:8080/oauth",
//         response_type: "code"
//     },
//     success: function(data){
//             console.log(data)
//             window.location.href = "/oath"
//             },
//     error: function(error) {
//         console.log(error)
        
//     }
// })
})
// $.ajax({
//             url: "https://us.battle.net/oauth/token",
//             method: "POST",
//             data: {
//                 client_id: 'aba192923781479bb3a7cc0aea5a4ec8',
//                 client_secret: 'uY15OZ3hycNFnOG96RAzNwc4hXL9CKm8',
//                 grant_type: 'client_credentials'
//             },
//             success: function(data){
//                 console.log(data)
//             }
//         })