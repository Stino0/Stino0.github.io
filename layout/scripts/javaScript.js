

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
      backgroundSize: (100 + scroll/7)  + "%",

    
    });
    $(".zoomUit").css({
      backgroundSize: (160 - scroll/10)  + "%",

    
    });
  });
  

  const video1 = document.querySelector("#autoStop1");
  const video2 = document.querySelector("#autoStop2");
  const video3 = document.querySelector("#autoStop3");
  const video4 = document.querySelector("#autoStop4");
  const video5 = document.querySelector("#autoStop5");
  const video6 = document.querySelector("#autoStop6");
  const video7 = document.querySelector("#autoStop7");
  const video8 = document.querySelector("#autoStop8");
  const video9 = document.querySelector("#autoStop9");
  const video10 = document.querySelector("#autoStop10");
  const video11 = document.querySelector("#autoStop11");
  const video12 = document.querySelector("#autoStop12");
  const video13 = document.querySelector("#autoStop13");



function playPause() { 
video1.pause();
video2.pause();
video3.pause();
video4.pause();
video5.pause();
video6.pause();
video7.pause();
video8.pause();
video9.pause();
video10.pause();
video11.pause();
video12.pause();
video13.pause();


video1.currentTime = 0;
video2.currentTime = 0;
video3.currentTime = 0;
video4.currentTime = 0;
video5.currentTime = 0;
video6.currentTime = 0;
video7.currentTime = 0;
video8.currentTime = 0;
video9.currentTime = 0;
video10.currentTime = 0;
video11.currentTime = 0;
video12.currentTime = 0;
video13.currentTime = 0;

}

function openContact(){
  document.getElementById("contactOpen").style.display = "block";
}
function sluitContact(){
  var s = document.getElementById('contactOpen').style;
  s.opacity = 1;
  (function fade(){(s.opacity-=0.1)<0?s.display="none":setTimeout(fade,50)})();
}
function zekerweten(){
  document.getElementById("knop1").style.display = "none";
  document.getElementById("knop2").style.display = "block";
  document.getElementById("knop3").style.display = "block";
  document.getElementById("tekstVerlaten").style.display = "block";

}
function tochNiet(){
  document.getElementById("knop1").style.display = "block";
  document.getElementById("knop2").style.display = "none";
  document.getElementById("knop3").style.display = "none";
  document.getElementById("tekstVerlaten").style.display = "none";

}

function geenSocialeMedia(){
  window.alert("Helaas heb ik op dit moment nog geen sociale media gekoppeld aan mijn site");
}


var ii = 0;
function move() {
  
  document.getElementById("myProgress").style.display="block";
  if (ii == 0) {
    ii = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 40);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        document.getElementById("myProgress").style.display="none";
        ii = 0;
        
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

var iii = 0;
function moveVideo() {
  document.getElementById("myProgress").style.display="block";
  if (iii == 0) {
    iii = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 80);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        document.getElementById("myProgress").style.display="none";
        iii = 0;
        var vid = document.getElementById("autoStop1");
        vid.autoplay = true;
        vid.controls = true;
        vid.load();
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function naarBenedenW(){
  window.scrollTo({ top: 1405, behavior: 'smooth' });
}
function naarBenedenI(){
  window.scrollTo({ top: 1498, behavior: 'smooth' });
}


function sluitenTelefoon(){
  document.getElementById("telefoon").style.display="none";

}