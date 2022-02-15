var http = require("http");
function onRequest(request,response){
    console.log("a user made request "+ request.url)
    response.writeHead(200,{
        ContentType:"text/plain"
    })
    response.write("here is your response")
    response.end()
}
http.createServer(onRequest).listen(8888)