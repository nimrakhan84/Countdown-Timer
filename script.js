let countDownDate="";
let x ;
function dateTime(){
 
  let dateCount=document.getElementById("select-date-time").value;
  console.log(dateCount);
  if (dateCount !== '0'){
    countDownDate = new Date(dateCount).getTime();
    x= setInterval(function() {

      var now = new Date().getTime();
    
      var distance = countDownDate - now;
    
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  
}

function Stop(){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "0d 0h 0m 0s";
    document.getElementById("select-date-time").value=0;
}

