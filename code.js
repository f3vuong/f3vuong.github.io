function readMore() {
    var nycText = document.getElementById("nyc-text");
    var btnText = document.getElementById("read-story");
  
    if (nycText.style.display === "block") {
      btnText.innerHTML = "Read more";
      nycText.style.display = "none";
    } else {
      btnText.innerHTML = "Read less";
      nycText.style.display = "block";
     
    }
  }