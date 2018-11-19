const http=require("http")
const server=http.createServer(function(req,res){
    res.write("hello world");//write response to the client
    res.end();
});
server.listen(3000);
console.log('listening on port 3000..');