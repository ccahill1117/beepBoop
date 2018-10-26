function countUpper (inputNo) {
  var newArray = [];
  if (inputNo === NaN) {
    newArray.push("u must enter num")
  }
  else if (inputNo > 4294967295) {
    newArray.push("this number is too large for JavaScript to handle!")
  }
  else if (inputNo > 0) {
    for (var i = 0; i <= inputNo; i++) {
      if (i <= inputNo) {
        newArray.push(i+" ");
      }
    }
  }
  else if (inputNo < 0) {
    for (var i = 0; i >= inputNo; i--) {
      if (i >= inputNo) {
        newArray.push(i+" ");
      }
    }
  }
return newArray;
}

function isNumber (userInputNumber) {
  if ((Number(userInputNumber)) == NaN) {
    return ("plz");
  }
  else { return userInputNumber
  }
}

function replacer (inputArray, userName) {
  for (var x = 0; x <= inputArray.length; x++) {
    if (userName === "") {
      return "Stranger, I need a name to execute my program. Have you got one?"
    }
    else if (inputArray[x] % 3 === 0 && inputArray[x] != 0) {
      inputArray.splice(x, 1, "I'm sorry, " + userName + ". I'm afraid I can't do that.")
    }
    else if ((String(inputArray[x])).includes("1") === true) {
      inputArray.splice(x, 1, "Boop!")
    }
    else if ((String(inputArray[x])).includes("0") === true) {
      inputArray.splice(x, 1, "Beep!")
    }
  }
  return (inputArray.join());
}

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var userName = $("input#userName").val();
    var inputString = $("input#inputNumber").val();

    var inputNumber = parseInt(inputString);
    var acceptableNumber = isNumber(inputNumber);
    var initialArray = countUpper(acceptableNumber);
    var result = replacer(initialArray, userName);

    $("#outputHAL").empty()
    $("#outputHAL").text(result);
      $({count:0}).animate({count:result.length}, {
      duration: 5000,
      step: function() {
        $("#outputHAL").text(result.substring(0, Math.round(this.count)));
      }
    });
  });
});
