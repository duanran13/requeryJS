/**
 * Created by Administrator on 2017/2/23 0023.
 */
$("#shape-images").append($("#shape-images a").first().clone());
var oShapeImages = document.getElementById("shape-images");
var aImg = oShapeImages.getElementsByTagName("img");
var aA = oShapeImages.getElementsByTagName("a");
var iNow = 0;
oShapeImages.style.width = (aImg.length + 1) * aImg[0].offsetWidth + "px";
for (var i = 0; i < aA.length; i++) {
    aA[i].index = i;
    aA[i].onmouseover = function () {
        changeImg(this.index);
        iNow = this.index;
    };
}
function changeImg(index){
    for(var i = 0;i<aA.length;i++){
        aA[i].className = "";
    }
    aA[index == aA.length ? 0 :index].className = "select";
}










//function changeImg(index) {
//    for (var i = 0; i < aLi.length; i++) {
//        aLi[i].className = "";
//    }
//    aLi[index == aLi.length ? 0 : index].className = "selected";
//    animate(oContent, {left: -aImg[0].offsetWidth * index});
//}
//;
//oNext.onclick = function () {
//    iNow++;
//    if (iNow == aLi.length + 1) {
//        oContent.style.left = 0;
//        iNow = 1;
//    }
//    changeImg(iNow);
//};
//oPrev.onclick = function () {
//    iNow--;
//    if (iNow == -1) {//再点Inow的值就变成-1，当inow变成-1时，让oContent的left移到最后的位置
//        oContent.style.left = -aLi.length * aImg[0].offsetWidth + "px";//往左移，left值是负的
//        iNow = 3;//现在索引是第0个让他变成第三个就是第四个图片
//    }
//    changeImg(iNow);
//};
//timer = setInterval(function () {
//    oNext.onclick();
//}, 1000);
//oContainer.onmouseover = function () {
//    clearInterval(timer);
//};
//oContainer.onmouseout = function () {
//    timer = setInterval(function () {
//        oNext.onclick();
//    }, 1000);
//};