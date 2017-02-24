/**
 * Created by Administrator on 2017/2/19 0019.
 */
require(['jquery','dialog'],function($,dialog){
    $('#btn').on('click',function() {
        dialog.open({
            width: 800,
            height:400,
            title:"haha",
            content:"补补"
        });
        dialog.close()
    });
});