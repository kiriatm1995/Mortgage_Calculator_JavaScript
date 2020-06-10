//Calculate Mortgage
function calculateMortgage() {
  var loanAmt = document.getElementById("loanAmt").value;
  var loanTerm = document.getElementById("loanTerm").value;
  var intRate = document.getElementById("intRate").value;

  //validate input
  if (loanAmt === "" || loanTerm == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (intRate === "" || intRate <= 1) {
    nintRate = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate Mortgage
  var total = loanAmt * (((intRate/100)/12) * (1 + (intRate/100)/12) ** loanTerm) / ((1 + (intRate/100)/12) ** loanTerm - 1);
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the Mortgage
  document.getElementById("totalMortgage").style.display = "block";
  document.getElementById("mortgage").innerHTML = total;

}

//Hide the Mortgage amount on load
document.getElementById("totalMortgage").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateMortgage();

};