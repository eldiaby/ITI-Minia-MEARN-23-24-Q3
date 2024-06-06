/////////// 1
var jstips = new Array();
jstips[0] = "How to Convert A Type Value into Boolean Type in JavaScript";
jstips[1] = "The Best Way to Convert Your Values in Numbers to Strings";
jstips[2] = "The Fastest Way to Convert a String into a Number in JavaScript";
jstips[3] = "Using Quick Powers to Get Better and Faster at JavaScript";
jstips[4] = "The Smoothest Quick Float to Integer Conversion Method";
jstips[5] = "How to Compare Arrays in JavaScript In Seconds";
jstips[6] =
  "An Essential, Time-Saving Method to Dealing With Empty and Non-Empty Values";
jstips[7] = "An Effortless Trick to Get The Last Item(s) in an Array ";
jstips[8] = "How to Truncate an Array in JavaScript in the Best Possible Way";
jstips[9] = "The Fastest Way to Check the Performance of Your Code";
document.write(jstips[Math.floor(Math.random() * 10)]);
//=========================================================//
//2
function currenttime() {
  var date = new Date();
  alert(date);
}
//====================================================================//
//3
function email() {
  let ex = prompt("Enter your Email: ");
  ex.includes("@") && ex[0] != "@" && ex[ex.length - 1] != "@"
    ? alert("true")
    : alert("false");
}
//======================================================//
//4
function formFun() {
  do {
    var userName = prompt("Enter your name please:");
    var nameReg = /^[a-zA-Z]{3,}( )[a-zA-z]{3,}$/gm;
    // console.log(nameReg.test(userName))
    var userEmail = prompt("Enter your Email address please: ");
    var emailReg = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}(.eg)$/gm;
  } while (!nameReg.test(userName) && !emailReg.test(userEmail));
}

//=====================================================//
//6
var student = [15, 90, 30, 65, 70, 10, 100];
document.write(
  student.sort(function (a, b) {
    return a - b;
  })
);
//
function highdegree(degree) {
  return degree >= 100;
}
// var highestdegree = student.find(highdegree);
console.log(student.find(highdegree));
//
var result = new Array();
result = student.filter(checkdegree);
function checkdegree(degree) {
  return degree < 60;
}
console.log(result);
//========================================================//
//7 ////////false
var student = new Array();
student["ali"] = 60;
student["diab"] = 100;
student["mohammed"] = 40;
student["amir"] = 15;
student["mostafa"] = 95;
var studentdegree;
studentdegree = student.find(testdegree);
function testdegree(degree) {
  if (degree < 100 && degree > 90) {
    return degree;
  }
}
console.log(studentdegree);
//==========================================================================//
//8
//console.log(typeof userbirthday.length);
function testbirthday() {
  var userbirthday = prompt("please enter your birth day in DD-MM-YYYY");
  if (
    userbirthday.length == 10 &&
    userbirthday[2] == "-" &&
    userbirthday[5] == "-"
  ) {
    alert(userbirthday);
  } else {
    alert("wrong date");
  }
}
//=================================================================================//
//9
function trycatch() {
  try {
    var test = promt("test");
  } catch {
    console.log("You have got an error, please handl this error");
  } finally {
    alert("the lab is done, thanks for watching :)");
  }
}
