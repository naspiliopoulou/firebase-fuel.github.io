//trip insurance
function calculateInsurance(type) {
    var table = document.getElementById('insuranceTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    var rate = (type === 'regular') ? 0.02 : 0.04;

    for (var miles = 100; miles <= 2000; miles += 50) {
        var cost = rate * miles;
        addRow(table, miles, type.charAt(0).toUpperCase() + type.slice(1) + ' Insurance', '$' + cost.toFixed(2));
    }
}

function addRow(table, miles, type, cost) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = miles;
    cell2.textContent = type;
    cell3.textContent = cost;
}

//tripfuelcost
function calculateTotalCost() {
    var costPerGallon = parseFloat(document.getElementById('costPerGallon').value);
    var milesPerGallon = parseFloat(document.getElementById('milesPerGallon').value);
    var miles = parseFloat(document.getElementById('miles').value);

    var outputDiv = document.getElementById('totalCostOutput');

    if (isNaN(costPerGallon) || isNaN(milesPerGallon) || isNaN(miles)) {
        outputDiv.innerHTML = 'Please fill in all the values before calculating.';
    } else {
        var totalCost = (miles / milesPerGallon) * costPerGallon;
        outputDiv.innerHTML = 'Total Cost: $' + totalCost.toFixed(2);
    }
}