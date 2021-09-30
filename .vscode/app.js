const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const categoryInput = document.querySelector('#input-category');
const budgetInput = document.querySelector('#input-budget');
const dateInput = document.querySelector('#input-date');
const cancelBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');



let myTotalExpenses = 0;


const clear =()=>{
  reasonInput.value = '';
  amountInput.value = '';
  categoryInput.value = '';
  dateInput.value = '';

};

const presentAlert = ()=> {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'ALERT';
  alert.message = 'Please Enter Reason, Amount, Category, and Date';
  alert.buttons = ['OK', 'Cancel'];

  document.body.appendChild(alert);
  alert.present();
};
cancelBtn.addEventListener ('click', clear);

//add expenses button EVent
addBtn.addEventListener('click', () => {

    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;
    const categoryEntered = categoryInput.value;
    const dateEntered = dateInput.value;

    if(reasonEntered.trim().length <= 0 || categoryEntered.trim().length <= 0 || dateEntered.trim().length <= 0 || amountEntered <= 0 ||
    amountEntered.trim().length <= 0) {
      presentAlert();
      return;
    };
  
    console.log(reasonEntered, amountEntered, categoryEntered, dateEntered,);

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ': ₱' + amountEntered + " "  +
     'Category:' + categoryEntered + " " + 
     'Date:' + dateEntered;
    expensesList.appendChild(newExpenses);

    myTotalExpenses += +amountEntered;
    totalExpenses.textContent= myTotalExpenses;


    clear();
});


