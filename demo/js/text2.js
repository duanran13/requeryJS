/**
 * Created by Administrator on 2017/2/19 0019.
 */
define(['text3'],function(isArray){
    function arraySort(arr){
        if(!isArray(arr)){
            return "上传的非数组";
        }
        arr.sort(function(a,b){
            return a-b;
        });
        return arr;//返回排完序的数组
    }
    return arraySort;
});