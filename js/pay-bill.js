const payBillAmount = document.getElementById('amount')
document.getElementById('pay-bill-btn')
    .addEventListener('click', function(){
        let payBilPin = getInputFieldValueById('pay-bill-pin');
        if(payBilPin !== 2222){
            alert('write 2222 as a pin Number of pay Bill')
        }else{
            let payBillInput = getInputFieldValueById('pay-bill-input');
            let payBillInner = getTextFieldValueById('amount');

            payBillAmount.innerText = payBillInner - payBillInput;
        }
})