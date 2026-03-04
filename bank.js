let balance = 0;
let accountNumber = "";
let accountCreated = false;
let history = [];

function addAccount() {
    accountNumber = document.getElementById("accNumber").value;

    if (accountNumber === "") {
        alert("Please enter account number");
        return;
    }

    accountCreated = true;

    document.getElementById("withdrawAcc").innerText = accountNumber;
    document.getElementById("depositAcc").innerText = accountNumber;
    document.getElementById("summaryAcc").innerText = accountNumber;

    alert("Account Created Successfully!");
    showWithdraw();
}

function hideAll() {
    document.getElementById("accountSection").style.display = "none";
    document.getElementById("withdrawSection").style.display = "none";
    document.getElementById("depositSection").style.display = "none";
    document.getElementById("summarySection").style.display = "none";
}

function showWithdraw() {
    if (!accountCreated) {
        alert("Please add account first!");
        return;
    }
    hideAll();
    document.getElementById("withdrawSection").style.display = "block";
}

function showDeposit() {
    if (!accountCreated) {
        alert("Please add account first!");
        return;
    }
    hideAll();
    document.getElementById("depositSection").style.display = "block";
}

function showSummary() {
    if (!accountCreated) {
        alert("Please add account first!");
        return;
    }
    hideAll();
    document.getElementById("summarySection").style.display = "block";
    document.getElementById("summaryBalance").innerText = balance;
}

function deposit() {
    let amount = Number(document.getElementById("depositAmount").value);

    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    balance += amount;
    history.push({ type: "Deposit", amount: amount });
    updateHistory();

    document.getElementById("balance").innerText = balance;
    document.getElementById("balance2").innerText = balance;

    alert("Amount Deposited Successfully!");
}

function withdraw() {
    let amount = Number(document.getElementById("withdrawAmount").value);

    if (amount > balance) {
        alert("Insufficient Balance");
        return;
    }

    balance -= amount;
    history.push({ type: "Withdraw", amount: amount });
    updateHistory();

    document.getElementById("balance").innerText = balance;
    document.getElementById("balance2").innerText = balance;

    alert("Amount Withdrawn Successfully!");
}

function updateHistory() {
    let table = document.getElementById("historyTable");

    table.innerHTML = `
        <tr>
            <th>Type</th>
            <th>Amount</th>
        </tr>
    `;

    history.forEach(function (item) {
        let row = table.insertRow();
        row.insertCell(0).innerText = item.type;
        row.insertCell(1).innerText = "₹" + item.amount;
    });
}

function goBack() {
    hideAll();
    document.getElementById("accountSection").style.display = "block";
}

function editAccount() {
    accountCreated = false;
    balance = 0;
    history = [];
    alert("Account Reset! Add new account.");
    goBack();
}
