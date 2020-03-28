const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });
var userdata={
	'id':'server',
	'serialOut':{
		'dn':'on',
		'tyj':'on',
	}
};
server.on('open', function open() {
  console.log('connected');
});

server.on('close', function close() {
  console.log('disconnected');
});

server.on('connection', function connection(ws, req) {
  const ip = req.connection.remoteAddress;
  const port = req.connection.remotePort;
  const clientName = ip +':'+ port;

  console.log('%s is connected', clientName)

  // 发送欢迎信息给客户端
  //ws.send("Welcome " + clientName);
  

  ws.on('message', function incoming(message) {
    console.log('received: %s from %s', message, clientName);
    
	//
	
	
    

  });

});
每秒向所有连接的客户端发送当前的消息.
var timer =setInterval(broadcastMessage,1000);

function broadcastMessage(){
	// 广播消息给所有客户端
	server.clients.forEach(function each(client) {
	  if (client.readyState === WebSocket.OPEN) {
	    client.send(JSON.stringify(userdata));
	  }
	 // console.log(time+'----1');
	});
}

function sendtoClient( cli){
	if (cli.readyState === WebSocket.OPEN) {
	  cli.send(JSON.stringify(userdata));
	}else{
		console.cog('client '+cli+'is not avaliable')
	}
}