debugger
alert("Welcome to my site!");
var userName = prompt("Enter your name please:");
document.write("welcome, " + userName);

function sum(num1, num2) {
  return num1 + num2;
}
function getdate() {
  let num1 = parseInt(prompt("write fitst number:"));
  let num2 = parseInt(prompt("write second number:"));

  console.log(sum(num1, num2));
}
function check_temp(temp) {
  let weater = temp >= 30 ? console.log("HOT") : console.log("cold");
}
check_temp(30);
function check_temp(temp, actualFeel) {
  if (temp > 25 && temp < 30 && actualFeel > 25 && actualFeel < 30) {
    console.log("Normal");
  } else if (temp < 25 && actualFeel < 25) {
    console.log("Cold");
  } else if (temp > 30 && actualFeel > 30) {
    console.log("Hot");
  }
  else
    {console.log("Ambiguous");}
}
check_temp(30, 28);
////////////////////////////////////////////////////////////////
//5
function college(usercollege) {
  switch (usercollege) {
    case "FCI":
      console.log("You're eligible to Programing tracks");
      break;
    case "Engineering":
      console.log("You're eligible to Network and Embedded tracks");
      break;
    case "Commerce":
      console.log("You're eligible to ERP and Social media tracks");
      break;
    default:
      console.log("You're eligible to SW fundamentals track");
  }
}

college("FCI");

function odd_numbers(num1, num2) {
  for (i = num1; i <= num2; i++) {
    if (i % 2 != 0) console.log(i);
  }
}
odd_numbers(2, 10);
///////////////////////////////////////////////
////    7
function getmathop(){
    var ex = prompt("please enter the math operathion:");
    console.log("You enter:"+ex+"="+mathop(ex));
}

function mathop(x){
  return eval(x);
}


