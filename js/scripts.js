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


$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("input#inputNumber").val();
    var inputNumber = parseInt(inputString);

    var initialArray = countUpper(inputNumber);

    console.log(initialArray);

    $("#outputHAL").empty()
    $("#outputHAL").text(initialArray);

  });
});
