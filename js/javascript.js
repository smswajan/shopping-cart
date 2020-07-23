const eachPhone = 1219;
const eachCase = 59;
const phMinus = document.getElementById("phMinus");
phMinus.addEventListener("click", function() {
  var eachUnit = eachPhone;
  var operation = -1;
  updateInfo("phQuantity", "phonePrice", eachUnit, operation);
});

const phPlus = document.getElementById("phPlus");
phPlus.addEventListener("click", function() {
  var eachUnit = eachPhone;
  var operation = 1;
  updateInfo("phQuantity", "phonePrice", eachUnit, operation);
});

const csMinus = document.getElementById("csMinus");
csMinus.addEventListener("click", function() {
  var eachUnit = eachCase;
  var operation = -1;
  updateInfo("caseQuantity", "casePrice", eachUnit, operation);
});

const csPlus = document.getElementById("csPlus");
csPlus.addEventListener("click", function() {
  var eachUnit = eachCase;
  var operation = 1;
  updateInfo("caseQuantity", "casePrice", eachUnit, operation);
});

const phoneNo = document.getElementById("phoneNo");
phoneNo.addEventListener("click", function() {
  blankCart("phQuantity", "phonePrice");
});

const caseNo = document.getElementById("caseNo");
caseNo.addEventListener("click", function() {
  blankCart("caseQuantity", "casePrice");
});

function blankCart(idQ, idP) {
  document.getElementById(idQ).value = 0;
  document.getElementById(idP).innerText = 0;
  totalCalculation();
}
// Plus button

// update price function
function updateInfo(idQ, idP, eachUnit, operation) {
  var quantity = parseInt(document.getElementById(idQ).value);

  var price = parseFloat(document.getElementById(idP).innerText);

  var subtotal = parseFloat(document.getElementById("subTotal").value);
  var tax = parseFloat(document.getElementById("tax").value);

  var quantity = quantity + 1 * operation;
  price = price + eachUnit * operation;

  if (quantity < 0) {
    alert("Sorry! You cannot order a negative number of products.");
    return;
  }

  document.getElementById(idQ).value = quantity;
  document.getElementById(idP).innerText = price;

  totalCalculation();
}

function totalCalculation() {
  var phoneCost = parseFloat(document.getElementById("phonePrice").innerText);
  var caseCost = parseFloat(document.getElementById("casePrice").innerText);
  var subtotal = phoneCost + caseCost;
  var tax = subtotal * 0.15;
  var total = subtotal + tax;

  document.getElementById("subTotal").innerText = subtotal.toFixed(2);
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}
