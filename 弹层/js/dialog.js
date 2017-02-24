/**
 * Created by Administrator on 2017/2/19 0019.
 */
define(['jquery'],function($){
    return{
        defaulVal:{
            width:400,
            height:300
        },
        open:function(options){
            var _this = this;
            $.extend(this.defaulVal,options);
            //console.log(this.defaultVal);
            var str = '<div class="container">'
                        +'<div class="dialog"></div>'
                        +'<div class="dialog-mask">'
                            +'<div class="dialog-title">'
                                +'<div class="title-con">'+this.defaulVal.title+'</div>'
                                +'<div class="dialog-button">[X]</div>'
                            +'</div>'
                        +'<div class="dialog-container">'+this.defaulVal.content+'</div>'
                        +'</div>'
                    +'</div>';
            $('body').append(str);
            $('.dialog-mask').css({
                width:this.defaulVal.width,
                height:this.defaulVal.height,
                'margin-left':-this.defaulVal.width/2,
                'margin-top':-this.defaulVal.height/2
            });
            //防止宽高突然变化会一闪
            $('.dialog-button').on('click',function(){
                _this.close();
            });
        },

        close:function(){
            $('.dialog-button').on('click',function(){
               $('.container').remove();
            });
        }
    }
});