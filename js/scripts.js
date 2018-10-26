



$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var inputString = $("input#inputNumber").val();

    console.log(inputString);

    $("#outputHAL").text(inputString);

  });
});
