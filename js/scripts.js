function countUpper (inputNo) {
  var newArray = [];
  if (inputNo > 0) {
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

function replacer (inputArray) {
  var newNewArray = [];
  for (var x = 0; x <= inputArray.length; x++) {
    if ((String(inputArray[x])).includes("0") === true) {
      inputArray.splice(x, 1, "beep")
    }
    else if (inputArray[x] % 3 === 0) {
      inputArray.splice(x, 1, "I'm sorry")
    }
  }
  return inputArray;
}


$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("input#inputNumber").val();
    var inputNumber = parseInt(inputString);

    var initialArray = countUpper(inputNumber);
    var result = replacer(initialArray);

    console.log(initialArray);
    console.log(result);
    $("#outputHAL").empty()
    $("#outputHAL").text(result);

  });
});
