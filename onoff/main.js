// 코드 작성! function을 완성하라!
var on = true;

function switchOn(){

     if (on == true) {
         document.querySelector('img').src="images/b_on.png";
         on = false;
     } else if (on == false) {
         document.querySelector('img').src="images/b_off.png";
         on = true;
    }
}