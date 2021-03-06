var hmb;
var amb;


var main;
var original;
var clone;

var onMain = true;
var eventattached = false;


window.onload=function(){
  

 hmb = document.getElementById('homebutton');
 amb = document.getElementById('aboutmebutton');
 hmb.addEventListener("click", homescript);
 amb.addEventListener("click", aboutmescript);
 hmb.disabled = true;
 eventattached = false;

 document.getElementById("projimg").style.opacity ="1";

 main = document.getElementById('changeable');
 save = document.getElementById('changeable');
 copy = save.cloneNode(true);
 original = document.getElementById('aboutmemain');
 clone = original.cloneNode(true);

 document.getElementById("moregithub").style.opacity ="1";
    document.getElementById('moregithub').addEventListener("click",function openInNewTab() {
        var win = window.open("https://github.com/pvhil", '_blank');
        win.focus();
      });

      


 document.getElementById('changeable').style.opacity ="1";
 document.getElementById('aboutmemain').style.opacity ="0";
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }






function homescript() {
    document.getElementById('aboutmemain').style.opacity ="0";


    setTimeout(function(){
    document.getElementById('aboutmemain').replaceWith(copy);
    document.getElementById("aboutmemain").style.display = "none";
    hmb.disabled = true;
    amb.disabled = false;
    document.getElementById('changeable').style.opacity ="0";

    
    document.getElementById('changeable').style.opacity ="1";

    }, 550);
    


}

function aboutmescript() {
    document.getElementById('changeable').style.opacity ="0";


    setTimeout(function(){
    document.getElementById('changeable').replaceWith(clone);
    document.getElementById("aboutmemain").style.display = "inline-block";
    amb.disabled = true;
    hmb.disabled = false;
    document.getElementById('aboutmemain').style.opacity ="0";


    document.getElementById('aboutmemain').style.opacity ="1";

}, 550);


}





