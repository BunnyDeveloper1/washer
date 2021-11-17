$(document).ready(function(){
    $(window).scroll(function(){
        scrolls = $(this).scrollTop();

        if(scrolls > 10){
            document.getElementById("menu").style.backgroundColor="#1877F2";
            let text = document.getElementsByClassName("nav-link");
            text[0].style.color="#012169";
            text[1].style.color="#012169";
            text[2].style.color="#012169";
            text[3].style.color="#012169";
            text[4].style.color="#012169";
            text[5].style.color="#012169";
            text[6].style.color="#012169";
            text[7].style.color="#012169";
            text[8].style.color="#012169";
            text[9].style.color="#012169";




        }
        else{
            document.getElementById('menu').style.background="rgba(0,0,0,0.3)";
            let text = document.getElementsByClassName("nav-link");
            text[0].style.color="white";
            text[1].style.color="white";
            text[2].style.color="white";
            text[3].style.color="white";
            text[4].style.color="white";
            text[5].style.color="white";
            text[6].style.color="white";
            text[7].style.color="white";
            text[8].style.color="white";
            text[9].style.color="white";

        }
        }
    )
}
);


function date(){
let date = new Date();
todaydate= date.getDate();
todaymonth= date.getMonth() + 1;
todayyear= date.getFullYear();
if (todaydate < 10){
    todaydate = "0" + todaydate;
}
if (todaymonth < 10 ){
    todaymonth = "0" + todaymonth;
}
mindate = todayyear +"-"+ todaymonth +"-"+ todaydate;
document.getElementById("bookdate").setAttribute("min", mindate);
}
function select_time(id){

ids = ["btn_time1", "btn_time2", "btn_time3", "btn_time4"];
document.getElementById(id).style.backgroundColor = "green";
for(var i = 0; i < ids.length; i++){
    if(ids[i] == id){
        continue;
    }
    document.getElementById(ids[i]).style.backgroundColor = "white";
}
}


setTimeout(stopanimation, 4500);
function stopanimation(){
    document.getElementById("img_container").style.animationPlayState = "paused";
    document.getElementById("content_container").style.animationPlayState = "paused";
}
