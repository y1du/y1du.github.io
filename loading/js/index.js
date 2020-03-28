
var progress=0;
var bar = document.getElementsByClassName('bar')[0];
var loading = document.getElementsByClassName('loading')[0];
var loingMoster=document.getElementsByClassName('login-monster')[0];
 
var kt =document.getElementById(1);
var dn =document.getElementById(2);
var tyj =document.getElementById(3);
var cm =document.getElementById(4);
var cmd =document.getElementById(5);
var ltd =document.getElementById(6);
var fsd =document.getElementById(7);
var thb =document.getElementById(8);

var timer = setInterval(function(){
	progress++;
	bar.style.width= progress+'%';
	if(progress>90 && conneted===true){
		clearInterval(timer);
		// 退出载入界面,进入主界面
		loingMoster.classList.add('complete')
		loading.classList.add('complete');
	}
},30);

var conneted=false;
var wss = new WebSocket('ws://192.168.0.175:8080');

var resObj;

wss.onopen=function(){
	console.log('已连接');
	conneted=true;
	wss.send('hello world');
} 
wss.onclose=function(){
	conneted=false;
	console.log('已关闭')
}
wss.onmessage=function(msg){
	console.log('收到数据'+msg.data);
	resObj=eval('('+msg.data+')');
	//resObj=Json.serializeToStream(msg.data);
	console.log(resObj);
}

var freshTimer = setInterval(function(){
	
	if(resObj.serialOut.ktj&&resObj.serialOut.ktj=='on'){
		kt.classList.add('on');
	} 
	else{   
		kt.classList.remove('on');
	} 
	if(resObj.serialOut.dn&&resObj.serialOut.dn=='on'){dn.classList.add('on');}else{dn.classList.remove('on');}
	if(resObj.serialOut.tyj&&resObj.serialOut.tyj=='on'){tyj.classList.add('on');}else{tyj.classList.remove('on');}
	if(resObj.serialOut.cm&&resObj.serialOut.cm=='on'){cm.classList.add('on');}else{cm.classList.remove('on');}
	if(resObj.serialOut.cmd&&resObj.serialOut.cmd=='on'){cmd.classList.add('on');}else{cmd.classList.remove('on');}
	if(resObj.serialOut.ltd&&resObj.serialOut.ltd=='on'){ltd.classList.add('on');}else{ltd.classList.remove('on');}
	if(resObj.serialOut.fsd&&resObj.serialOut.fsd=='on'){fsd.classList.add('on');}else{fsd.classList.remove('on');}
	if(resObj.serialOut.thb&&resObj.serialOut.thb=='on'){thb.classList.add('on');}else{thb.classList.remove('on');}
	
},500);