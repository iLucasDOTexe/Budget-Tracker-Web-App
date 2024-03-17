var transactionSelection = document.getElementById('transactionSelection').value;
var categorySelection = document.getElementById('categorySelection');

if (transactionSelection === "income"){
    categorySelection.setAttribute("disabled");
}
else {};