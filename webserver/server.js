const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });
// 通信数据的格式
var userdata={
	'id':'server',
	'quanxi':{
	'online':false,
	'mode':0,
	'volume':0,
	'picIndex':0,
	'videoIndex':0
	},
	'dmt1':{
	'online':false,
	'mode':0,
	'volume':0,
	'picIndex':0,
	'videoIndex':0
	},
	'dmt2':{
	'online':false,
	'mode':0,
	'volume':0,
	'picIndex':0,
	'videoIndex':0
	},
	'dmt3':{
	'online':false,
	'mode':0,
	'volume':0,
	'picIndex':0,
	'videoIndex':0
	},
	'dmt4':{
	'online':false,
	'mode':0,
	'volume':0,
	'picIndex':0,
	'videoIndex':0
	},
	'serialOut':{
		'dn':'off',
		'tyj':'off',
		'cm':'off',
		'cmd':'off',
		'ktj':'off',
		'thb':'off',
		'ltd':'off',
		'fsd':'off',
		'zm1':0,
		'zm2':0,
		'zm3':0,
		'fw':0,
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
  
  ws.on('message', function incoming(message) {
    console.log('received: %s from %s', message, clientName);
	var inputData;
	try{
		var inputData=JSON.parse(message);
	}catch(e){
		//TODO handle the exception
		console.log('Json错误的数据格式');
	}
	
	if(inputData&&inputData.id&&inputData.id=='operator'){//有效的操作格式
		console.log('正在请求请求操作Json数据');
		if(inputData.quanxi&&inputData.quanxi.mode){
			userdata.quanxi.mode=inputData.quanxi.mode;
		}
		if(inputData.quanxi&&inputData.quanxi.volume){
			userdata.quanxi.volume=inputData.quanxi.volume;
		}
		if(inputData.quanxi&&inputData.quanxi.picIndex){
			userdata.quanxi.volume=inputData.quanxi.picIndex;
		}
		if(inputData.quanxi&&inputData.quanxi.videoIndex){
			userdata.quanxi.volume=inputData.quanxi.videoIndex;
		}
		//多媒体1
		if(inputData.dmt1&&inputData.dmt1.mode){
			userdata.dmt1.mode=inputData.dmt1.mode;
		}
		if(inputData.dmt1&&inputData.dmt1.volume){
			userdata.dmt1.volume=inputData.dmt1.volume;
		}
		if(inputData.dmt1&&inputData.dmt1.picIndex){
			userdata.dmt1.volume=inputData.dmt1.picIndex;
		}
		if(inputData.dmt1&&inputData.dmt1.videoIndex){
			userdata.dmt1.volume=inputData.dmt1.videoIndex;
		}
		//dmt2
		if(inputData.dmt2&&inputData.dmt2.mode){
			userdata.dmt2.mode=inputData.dmt2.mode;
		}
		if(inputData.dmt2&&inputData.dmt2.volume){
			userdata.dmt2.volume=inputData.dmt2.volume;
		}
		if(inputData.dmt2&&inputData.dmt2.picIndex){
			userdata.dmt2.volume=inputData.dmt2.picIndex;
		}
		if(inputData.dmt2&&inputData.dmt2.videoIndex){
			userdata.dmt2.volume=inputData.dmt2.videoIndex;
		}
		//dmt3
		if(inputData.dmt3&&inputData.dmt3.mode){
			userdata.dmt3.mode=inputData.dmt3.mode;
		}
		if(inputData.dmt3&&inputData.dmt3.volume){
			userdata.dmt3.volume=inputData.dmt3.volume;
		}
		if(inputData.dmt3&&inputData.dmt3.picIndex){
			userdata.dmt3.volume=inputData.dmt3.picIndex;
		}
		if(inputData.dmt3&&inputData.dmt3.videoIndex){
			userdata.dmt3.volume=inputData.dmt3.videoIndex;
		}
		//dmt4
		 
		if(inputData.dmt4&&inputData.dmt4.mode){
			userdata.dmt4.mode=inputData.dmt4.mode;
		}
		if(inputData.dmt4&&inputData.dmt4.volume){
			userdata.dmt4.volume=inputData.dmt4.volume;
		}
		if(inputData.dmt4&&inputData.dmt4.picIndex){
			userdata.dmt4.volume=inputData.dmt4.picIndex;
		}
		if(inputData.dmt4&&inputData.dmt4.videoIndex){
			userdata.dmt4.volume=inputData.dmt4.videoIndex;
		}
		//serialOut
		if(inputData.serialOut&&inputData.serialOut.dn){//电脑
			userdata.serialOut.dn=inputData.serialOut.dn;
		}
		if(inputData.serialOut&&inputData.serialOut.ty){//投影
			userdata.serialOut.ty=inputData.serialOut.ty;
		}
		if(inputData.serialOut&&inputData.serialOut.cmd){
			userdata.serialOut.cmd=inputData.serialOut.cmd;
		}
		if(inputData.serialOut&&inputData.serialOut.cm){
			userdata.serialOut.cm=inputData.serialOut.cm;
		}
		if(inputData.serialOut&&inputData.serialOut.ktj){
			userdata.serialOut.ktj=inputData.serialOut.ktj;
		}
		if(inputData.serialOut&&inputData.serialOut.thb){
			userdata.serialOut.thb=inputData.serialOut.thb;
		}
		if(inputData.serialOut&&inputData.serialOut.ltd){
			userdata.serialOut.ltd=inputData.serialOut.ltd;
		}
		if(inputData.serialOut&&inputData.serialOut.fsd){
			userdata.serialOut.fsd=inputData.serialOut.fsd;
		}
		
		if(inputData.serialOut&&inputData.serialOut.zm1){
			userdata.serialOut.zm1=inputData.serialOut.zm1;
		}
		if(inputData.serialOut&&inputData.serialOut.zm2){
			userdata.serialOut.zm2=inputData.serialOut.zm2;
		}
		if(inputData.serialOut&&inputData.serialOut.zm3){
			userdata.serialOut.zm3=inputData.serialOut.zm3;
		}
		if(inputData.serialOut&&inputData.serialOut.fw){
			userdata.serialOut.fw=inputData.serialOut.fw;
		}
		
	}else{
		console.log('请求的id格式不正确');
	}
  });

});
// 每秒向所有连接的客户端发送当前的消息.
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