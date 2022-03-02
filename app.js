const http = require("http")
const fs = require("fs")

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write("Page Not Found")
        } else {
            res.write(data)
        }
        res.end();
    })
}

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"})
    
    const url = req.url;

    switch(url){
        case "/home":
            renderHTML("./home.html", res);
            break;
        case "/info": 
            renderHTML("./info.html", res);
            break;
        case "/registrasi":
            renderHTML("./registrasi.html", res);
            break;
        case "/about":
            renderHTML("./about.html", res);
            break;
        case "/page5":
            renderHTML("/page5", res);
            break;
        default:
            renderHTML("./home.html", res)
            break;       
    }
}).listen(3000, () => {
    console.log("Server is Running on 3000")
})



