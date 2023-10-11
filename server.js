const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { //creates server
    console.log('Request Made');
    res.setHeader('Content-Type', 'text/html'); //sets content type

    let path = './' //starts path for url

    //Determines what url is given, adds it to path
    if(req.url == '/') {
        path+='index.html';
    } 
    else if(req.url == '/about') {
        path+='about.html';
    }
    else if(req.url == '/contact') {
        path+='contact.html';
    }
    else{
        path+='404.html';
    }

    fs.readFile(path, (err,data) => { //reads file from given url, and sends response
        if(err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data); //Sends reponse back
            res.end();
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})