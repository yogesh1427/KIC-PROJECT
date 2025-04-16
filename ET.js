let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let expenseChart;

function addExpense() {
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!amount || !category || !date) {
        alert("Please fill all fields");
        return;
    }

    const expense = { amount: parseFloat(amount), category, date };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

function displayExpenses() {
    const list = document.getElementById("expense-list");
    list.innerHTML = "";
    let total = 0;
    let categoryTotals = {};

    expenses.forEach(exp => {
        total += exp.amount;
        categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
        list.innerHTML += `<li>${exp.category} - ₹${exp.amount} on ${exp.date} <button onclick="deleteExpense('${exp.date}')">❌</button></li>`;
    });

    document.getElementById("total").innerText = total;
    updateChart(categoryTotals);
}

function deleteExpense(date) {
    expenses = expenses.filter(exp => exp.date !== date);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

function updateChart(categoryTotals) {
    const ctx = document.getElementById("expenseChart").getContext("2d");
    if (expenseChart) expenseChart.destroy();

    expenseChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(categoryTotals),
            datasets: [{
                label: "Expenses",
                data: Object.values(categoryTotals),
                backgroundColor: "#28a745"
            }]
        }
    });
}

displayExpenses();
