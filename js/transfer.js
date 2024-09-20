let transferMoney = document.getElementById('amount');
document.getElementById('transfer-btn').addEventListener('click', function(event){
    event.preventDefault();

    let transferInput =  getInputFieldValueById('transfer-input');
    let transferPin =  getInputFieldValueById('transfer-pin');
    let amountPresent =  getTextFieldValueById('amount');
    if(transferPin === 2341){
        transferMoney.innerText = amountPresent - transferInput;
        const transactionContent = document.getElementById('transaction-content');
        let p = document.createElement('p');
        p.classList.add("py-2")
        p.innerText = `Add Money Transaction ${transferInput} and available balance is ${transferMoney.innerText}`
        transactionContent.appendChild(p)
       
    }else{
        alert('Write 2341 as a Pin Number');
    }
       
})