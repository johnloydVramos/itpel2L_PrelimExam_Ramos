const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');


let myTotalExpenses = 0;

const clear =()=>{
  reasonInput.value = '';
  amountInput.value = '';
};

const presentToast = ()=>{
  const toast = document.createElement('ion-toast');
  toast.message = 'Please Enter Reason and Amount!';
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

cancelBtn.addEventListener ('click', clear);

//add expenses button EVent
addBtn.addEventListener('click', () => {

    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;

    if(reasonEntered.trim().length <= 0 || amountEntered <= 0 ||
    amountEntered.trim().length <= 0) {
      presentToast();
      return;
    }
  
     
    console.log(reasonEntered, amountEntered);

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ': ₱' + amountEntered;
    expensesList.appendChild(newExpenses);

    myTotalExpenses += +amountEntered;
    totalExpenses.textContent= myTotalExpenses;

    clear();
});


