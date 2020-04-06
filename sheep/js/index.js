/**
 * 1.动态的创建一只羊
 * 2.羊开始跑{
	 速度:每只羊的速度不一样
	 都是从右到左,自已还要动
	 在右出现的位置 是右边 上下位置不定.
	 羊的高度是122px,宽度是164px(由素材决定了)
 }
 * 3.不断的创建羊,形成羊群
 * 4.在跑动过程中,可以用鼠标手动羊的位置,拖动羊时羊不动,放手羊又开始跑.
 * 5.跑出界面后就可以回收了.
 */

var sheepShaun = {
	sPars:{//羊的参数信息
		width:164,//高度164px
		height:122,//宽度122px
		speed:7,//跑动速度
		frequency:70,//跑动频率
		top:0,//羊的顶点位置,在抓羊时变成下一行122px处
		left:0,
		stage:document.getElementsByClassName('stage')[0],
		maxSheep:8,
	},
	init:function(){
		this.createSheep();
	},
	createSheep : function(){
		function SheepClass(data){
			//创建一只羊
			this.sheep=document.createElement('div');
			//放到舞台上去
			data.stage.appendChild(this.sheep);
			//设置各种参数
			this.sheep.className='sheep';
			this.speed=data.speed;
			this.frequency=Math.floor(data.frequency*Math.random())+30;
			this.stage=data.stage;
			this.left=data.left;
			this.top=data.top;
			this.curTop=data.top;
			this.curSpeed=data.speed;
			var w=data.stage.offsetWidth;
			this.bottom=Math.floor(Math.random()*w/2);
		this.sheep.style.bottom=this.bottom+'px';
		}
		var oneSheep = new SheepClass(this.sPars);
		
		this.sheepRunning(oneSheep);
		console.log('创建一只羊');
		 
		var that = this;
		var timer = setInterval(function(){
			var sheeps = that.sPars.stage.children.length;
			if(sheeps<that.sPars.maxSheep){
				var oneSheep = new SheepClass(that.sPars);
				that.sheepRunning(oneSheep);
				console.log('创建一只羊');
			}
		},1000);
	},
	sheepRunning:function(obj){
		obj.sheepAnimate = setInterval(function(){
			//让动画自已动起来
			obj.left+=obj.sheep.offsetWidth;
			if(obj.left>=1312){
				obj.left=0;
			}
			//向左移动
			var cot = obj.sheep.offsetLeft-obj.speed;
			if(cot<=-obj.sheep.offsetWidth){
				//超出了界面UI
				clearInterval(obj.sheepAnimate);
				//把自已删除掉
				console.log('把羊删除')
				obj.stage.removeChild(obj.sheep);
			}
			//自已运动
			obj.sheep.style.left=cot+'px';
			obj.sheep.style.backgroundPosition=-obj.left+'px '+obj.top+'px';
		},obj.frequency);
		
		//小羊的拖拽效果
		obj.sheep.onmousedown = function(e){
			//记录当前的位置,停止向前移动
			obj.speed=0;
			obj.top=-128;
			obj.x=e.pageX;
			obj.y=e.pageY;
			document.onmousemove=function(e){
				//移动
				var chax=e.pageX-obj.x;
				var chay=e.pageY-obj.y;
				obj.sheep.style.left=chax+ obj.sheep.offsetLeft+'px';
				obj.sheep.style.top = chay+obj.sheep.offsetTop+'px';
				//更新新的x,y
				obj.x=e.pageX;
				obj.y=e.pageY;
			};
			this.onmouseup =function(e){
				//结束
				document.onmousemove=null;
				obj.speed=obj.curSpeed;
				obj.top=0;
			};
		};
		
	}
}
sheepShaun.init();