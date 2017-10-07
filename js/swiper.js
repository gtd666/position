/**
 * Created by 1 on 2017/9/1.
 */
    $(".content").each(function(index,item){
        item.addEventListener("touchstart",function(event){
            var start=event.changedTouches[0].clientX || event.clientX;
            item.addEventListener("touchend",function(event){
                var end=event.changedTouches[0].clientX || event.clientX;
                if(start>end){
                    $('.list').eq(index).stop().animate({"marginLeft":'-50'});
                    $('.content-r').eq(index).show();
                }else{
                    $('.list').eq(index).stop().animate({"marginLeft":'0'});
                    $('.content-r').eq(index).hide();
                }

            });

        });

    })


/*
var Swiper=function(content,leftback,rightback){
    this.config={
        ele:content,
        step:20,
        leftback:leftback,
        rightback:rightback,
        startX:0,
        startY:0
    };
    this.init();
};
Swiper.prototype={
    init:function(){
        var that=this;
        var tar=this.config.ele;
        for(var i=0;i<tar.length;i++){
            tar[i].addEventListener("touchstart",function(event){
               that.touchstart(tar,event)
             },false)
        }


    },
    swiperLeft:function(){
        this.config.leftback();

    },
    swiperRight:function(){
        this.config.rightback();
    },
    swiperCancle:function(){
        this.config.startX=0;
        this.config.startY=0;
        this.config.ele.removeEventListener('touchmove',this.onTouchMove)

    },
    touchstart:function(ele,event){
        var that=this;
        this.config.startX=event.changedTouches[0].clientX || event.clientX;
        for(var i=0;i<ele.length;i++){
            ele[i].addEventListener("touchstart",function(event){
                that.touchstart(ele[i],event)
            },false)
        }


    },
    touchmove:function(event){
        var mousex=event.changedTouches[0].clientX || event.clientX;
        var absDistX=Math.abs(this.config.startX-mousex);
        if(absDistX < this.config.step){
            this.swiperCancle();
        }else{
            if(this.config.startX > mousex){
                this.swiperLeft();
            }else{
                this.swiperRight();
            }
        }

    }
}*/
