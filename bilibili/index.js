/**
 * 1. 父元素(获取数据)
 * 2. 渲染元素（渲染）
 * 3. 监听事件
 * 4. 给父元素添加class
 */

var info = {
    el: null, // 初始时，声明一个父元素为null
    infoList: [], // 初识时，给数据赋值为一个空数组
    index: 0, // 现在显示的页数索引
    init: function (options) {
        // 初始化函数，在次函数内做一系列初始化操作，获取数据、渲染页面、监听事件等等
        this.initData(options);
        // 渲染页面
        this.render();
        //设置事件监听函数
        this.handle();
    },
    initData: function (options) {
        this.el = this.addElClass(options.el);//给元素添加上 _recommend-box 属性
        this.infoList = this.changePlayTimes(options.infoList);
    },
    render: function () {
        this.el.innerHTML = `
            <div class="btn btn--prev">&lt;</div>
            <div class="btn btn--next">&gt;</div>
            ${this.renderVideoReco()}
         `;
    },
    handle:function(){

        var self =this;
        this.el.onclick=function(e){
            var dom=e.target;
            
            var prev=dom.classList.contains('btn--prev');//上一页按钮
            var next=dom.classList.contains('btn--next');//下一页按钮
            var watch=dom.classList.contains('watch');//播放按钮

            if(prev){
                self.handleBtn('prev');
            }else if(next){
                self.handleBtn('next');
            }else if(watch){
                self.handleWatch(dom.getAttribute('data-index'));
            }
        }
    },
    changePlayTimes:function(lists){
        for(var i=0;i<lists.length;i++){

            var list =lists[i];
            var play=list.play;
            if(play>10000){
                play=(play/10000).toFixed(1)+'万';
                list.play=play;
            }

        }

        return lists;
    },
    addElClass: function (el) {
        el.classList.add('_recommend-box');
        return el
    },
    renderVideoReco: function () {
       
        var tmpString='';
        var start=this.index*8;
        var end=(this.index+1)*8;

        for(var i = start;i < end;i++){
            var info=this.infoList[i];
            tmpString +=`
                <div class="video-reco video-reco--${i % 4}" >
                <div class="info-box">
                    <a 
                        href="${info.url}" 
                        class="video-href"
                        target="_blank"
                    >
                        <img 
                            src="${info.poster}"
                            alt="${info.title}" 
                            class="poster"
                        />
                        <div class="info">
                            <p class="title">${info.title}</p>
                            <p class="up">up ${info.up}</p>
                            <p class="play">${info.play}播放</p>
                        </div>
                    </a>
                </div>
                <div class="watch" data-index=${i}></div>
                </div>
            `;
            }
        return tmpString;
    },
    
    handleWatch:function(num){
        alert('你点击了<稍后播放>序号：'+num);
    },
    handleBtn:function(type){
        if(type==='prev'){
            this.index--;
        }
        else{
            this.index++;
        }
        this.checkIndex();
        this.render();
    },
    checkIndex:function(){
        var max = this.infoList.length/8;
        if(this.index<0) this.index=max-1;
        if(this.index>=max)this.index=0;
    }
}