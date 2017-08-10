// remove blanks
// given a string, return it without blacks

var removeBlanks = function(str) {
  str = str.split(" ");
  newStr = str.join("");
  console.log(newStr);
};

removeBlanks("hello its me");

// string: get digits
function getDigits(str) {
  newStr = [];
  str = str.split("");
  for (var i=0; i<str.length; i++) {
//     console.log(str[i], typeof str[i]);
    if (typeof parseInt(str[i]) === "number") {
      if (!isNaN(parseInt(str[i]))) {
        str[i] = parseInt(str[i]);
//         console.log(str[i], typeof str[i]);
        newStr.push(str[i]);
      }
    }

  }
  console.log(newStr);
  newStr = parseInt(newStr.join(""));
  console.log(newStr);
}

getDigits("0w1e2t76u84ng9/56345");

// whats the ouput
console.log(1+2+"3"+"4"+5+6+7+8);
// 3345678

// function that returns the first letter of each string in capital letter
function acronyms(str) {
  str = str.split(",");
  console.log(str);
  str = str.join("").split(" ");
  console.log(str);
  for (var i=0; i<str.length; i++) {
    str[i] = str[i][0]
  }
  str = str.join("")
  console.log(str.toUpperCase());
};

acronyms(" there's, no - match");
acronyms("Live from New York, it's Saturday Night!");