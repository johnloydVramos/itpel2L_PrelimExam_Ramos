const addName = document.querySelector('#input-name');
const addNumber = document.querySelector('#input-number');
const cancelBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const contactList = document.querySelector('#contact-list');
const totalContact = document.querySelector('#total-contact');



let myTotalContacts = 0;


const clear =()=>{
  addName.value = '';
  addNumber.value = '';
  

};


const presentAlert = ()=> {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'ALERT';
  alert.message = 'Please Enter Contact Name and Contact Number';
  alert.buttons = ['OK', 'Cancel'];

  document.body.appendChild(alert);
  alert.present();
};


cancelBtn.addEventListener ('click', clear);

//add expenses button EVent
addBtn.addEventListener('click', () => {
    const nameEntered = addName.value;
    const numberEntered = addNumber.value;

    if(nameEntered.trim().length <= 0 || numberEntered <= 0 ||
    numberEntered.trim().length <= 0) {
      presentAlert();
      return;
    };
  
    console.log(nameEntered, numberEntered);

    const newContact = document.createElement('ion-item');
    newContact.textContent = nameEntered + ': ' + numberEntered;
    contactList.appendChild(newContact);

    clear();
});


