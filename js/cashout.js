let cashOutAmount = document.getElementById('amount');
document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    let cashInput =  getInputFieldValueById('cash-input');
    let cashPin =  getInputFieldValueById('cash-pin');
    let amountPresent =  getTextFieldValueById('amount');
    if(cashPin === 4321){
        cashOutAmount.innerText = amountPresent - cashInput;
        const transactionContent = document.getElementById('transaction-content');
        let p = document.createElement('p');
        p.innerText = `cash out Transaction ${cashInput} and available balance is ${cashOutAmount.innerText}`
        transactionContent.appendChild(p)
       
    }else{
        alert('Write 4321 as a Pin Number');
    }
       
})