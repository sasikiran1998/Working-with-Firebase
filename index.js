const functions = require("firebase-functions");
const express = require('express');

const app = express();

app.get('/timestamp',(request,response)=>{
    response.send(`${Date().toString()}`);
})
app.get('/timestamp-cached',(request,response)=>{
    response.set('Cache-control','public, max-age=300, s-maxage=600');
    response.send(`${Date.now()}`);
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 //exports.helloWorld = functions.https.onRequest((request, response) => {
   //functions.logger.info("Hello logs!", {structuredData: true});
   //response.send("Hello from Firebase!");
 //});

 exports.app = functions.https.onRequest(app);