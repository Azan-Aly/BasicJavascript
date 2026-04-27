const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const submitbtn = document.getElementById('submit');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let ArrObj = [];

// Load saved expenses from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
        ArrObj = JSON.parse(storedExpenses);
        ArrObj.forEach(addExpenseToDOM);
        updateTotal();
    }
});

submitbtn.addEventListener('click', () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);

    if (!name || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense name and a positive amount.');
        return;
    }

    const Obj = { name, amount };

    ArrObj.push(Obj);
    localStorage.setItem('expenses', JSON.stringify(ArrObj));
    
    addExpenseToDOM(Obj);
    updateTotal();

    expenseName.value = '';
    expenseAmount.value = '';
});

// Add expense to DOM with delete button
function addExpenseToDOM(expense) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${expense.name}</span> 
        <span>$${expense.amount.toFixed(2)}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        // Remove from array
        ArrObj = ArrObj.filter(e => !(e.name === expense.name && e.amount === expense.amount));
        
        // Update localStorage
        localStorage.setItem('expenses', JSON.stringify(ArrObj));
        
        // Remove from DOM
        li.remove();

        // Update total
        updateTotal();
    });

    expenseList.appendChild(li);
}

function updateTotal() {
    const total = ArrObj.reduce((sum, exp) => sum + exp.amount, 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
}
