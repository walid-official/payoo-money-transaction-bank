let allAmount = document.getElementById('amount');
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    let addMoneyInput =  getInputFieldValueById('add-money-input');
    let addMoneyPin =  getInputFieldValueById('add-money-pin');
    let amountPresent =  getTextFieldValueById('amount');
    if(addMoneyPin === 1234){
        allAmount.innerText = amountPresent + addMoneyInput;
        const transactionContent = document.getElementById('transaction-content');
        let p = document.createElement('p');
        p.classList.add("py-2")
        p.innerText = `Add Money Transaction ${addMoneyInput} and available balance is ${allAmount.innerText}`
        transactionContent.appendChild(p)
    }else{
        alert('Write 1234 as a Pin Number');
    }
       
})

// Changing Page

document.getElementById('add-money')
    .addEventListener('click', function(){
        showSectionById('container-add-money');
})

document.getElementById('cash-out')
    .addEventListener('click', function(){
        showSectionById('container-cash-out');
})

document.getElementById('transfer-money')
    .addEventListener('click', function(){
        showSectionById('container-transfer-money');
})

document.getElementById('transaction')
    .addEventListener("click",function(){
        showSectionById('transaction-container');
});