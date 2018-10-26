function countUpper (inputNo) {
  var newArray = [];
  if (inputNo > 4294967295) {
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
        newArray.reverse();
      }
    }
  }
return newArray;
}

function isNumber (userInputNumber) {
  if ((Number(userInputNumber)) == NaN) {
    return ("");
  }
  else { return userInputNumber
    }
}

function replacer (inputArray) {
  var newNewArray = [];
  for (var x = 0; x <= inputArray.length; x++) {
    if (inputArray[x] % 3 === 0 && inputArray[x] != 0) {
      inputArray.splice(x, 1, "I'm sorry Dave. I'm afraid I can't do that.")
    }
    else if ((String(inputArray[x])).includes("1") === true) {
      inputArray.splice(x, 1, "Boop!")
    }
    else if ((String(inputArray[x])).includes("0") === true) {
      inputArray.splice(x, 1, "Beep!")
    }
  }
  return inputArray;
}

$(document).ready(function() {

  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("input#inputNumber").val();
    var inputNumber = parseInt(inputString);
    var acceptableNumber = isNumber(inputNumber);

    var initialArray = countUpper(acceptableNumber);
    var result = replacer(initialArray);

    console.log(acceptableNumber);
    console.log(initialArray);
    console.log(result);
    $("#outputHAL").empty()
    $("#outputHAL").text(result);

  });
});
