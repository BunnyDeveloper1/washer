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

        }
        }
    )
}
);