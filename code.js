/*dropdown*/
function dropDown(){
  var button = document.getElementById("dropbtn");
  var content = document.getElementById("dropdown-content");

  if (content.style.display === "block"){
    content.style.display = "none";
  }else {
    content.style.display = "block";
  }


}
function count(){
  var counts= document.getElementById("btn-count");
  var x = counts.innerHTML
  counts.innerHTML = 1 + parseInt(x);
}

function  reset() {
var rests = document.getElementById("btn-reset");
var counts= document.getElementById("btn-count");
counts.innerHTML = 0;
}
/* travel page */


  function readMoreNYC() {
    var text = document.getElementById("nyc-text");
    var btnText = document.getElementById("nyc-btn");
  
    if (text.style.display === "block") {
      btnText.innerHTML = "Read More";
      text.style.display = "none";
    } else {
      btnText.innerHTML = "Read Less";
      text.style.display = "block";
     
    }
  }

  function readMoreVAN() {
    var text = document.getElementById("van-text");
    var btnText = document.getElementById("van-btn");

    if (text.style.display === "block") {
      btnText.innerHTML = "Read More";
      text.style.display = "none";
    } else {
      btnText.innerHTML = "Read Less";
      text.style.display = "block";
     
    }
  }

  function readMoreICE() {
    var text = document.getElementById("ice-text");
    var btnText = document.getElementById("ice-btn");

    if (text.style.display === "block") {
      btnText.innerHTML = "Read More";
      text.style.display = "none";
    } else {
      btnText.innerHTML = "Read Less";
      text.style.display = "block";
     
    }
  }