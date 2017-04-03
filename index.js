function checkP1() {
    if (getCookie("intell") == 1) {
      document.getElementById("check").innerHTML = "You've done this.";
      document.getElementById("return").innerHTML = "Ready for the next one?.";
      document.getElementById("input").remove();
    }
  }
function checkP2() {
    if (getCookie("igence") == 1) {
      document.getElementById("check").innerHTML = "You've done this.";
      document.getElementById("return").innerHTML = "You're pretty good at this but are you ready for the next one?.";
      document.getElementById("input").remove();
    }
}
function checkP3() {
    if (getCookie("test") == 1) {
      document.getElementById("check").innerHTML = "You've done this.";
      document.getElementById("return").innerHTML = "You're too good";
      document.getElementById("input").remove();
    }
}

function validate1() {
  var input = document.getElementById("input").value;

  if (input == 405) {
    var message = "Good job!";
    won++;
    setCookie("intell", 1, 2);
    setCookie("won", won, 2);
    document.getElementById("input").remove();
    document.getElementById("check").innerHTML = "";
    document.getElementById("return").innerHTML = "Go back.";
  }
  else if (isNaN(input)) {var message = "Please enter a number.";}

  else {
    var message = "Wrong!";
    loss++;
    setCookie("loss", loss, 2);
    document.getElementById("check").innerHTML = message;
  }
}

function validate2() {
  var input = document.getElementById("input").value;
  var won = getCookie("won");
  var loss = getCookie("loss");

  if (input == "28561") {
    var message = "You're good!";
    won++;
    setCookie("igence", 1, 2);
    setCookie("won", won, 2);
    document.getElementById("input").remove();
    document.getElementById("check").innerHTML = "";
    document.getElementById("return").innerHTML = "Go back.";
  }
  else if (isNaN(input)) { var message = "Please enter a number.";}

  else {
    var message = "Wrong";
    loss++;
    setCookie("loss", loss, 2);
    document.getElementById("check").innerHTML = message;
  }
}

function validate3() {
  var input = document.getElementById("input").value;
  var won = getCookie("won");
  var loss = getCookie("loss");

  if (input == "5508") {
    var message = "You play like a pro!";
    won++;
    setCookie("test", 1, 2);
    setCookie("won", won, 2);
    document.getElementById("input").remove();
    document.getElementById("check").innerHTML = "";
    document.getElementById("return").innerHTML = "Go back.";

  }
  else {
    var message = "Wrong";
    loss++;
    setCookie("loss", loss, 2);
    document.getElementById("check").innerHTML = message;
  }
}
