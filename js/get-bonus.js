const bonusButton = document.getElementById('get-bonus-btn');
const bonusAmount = document.getElementById('amount')
bonusButton.addEventListener('click', function(){
    let couponCard = document.getElementById('coupon-card');
   if(couponCard.value === "wisdom"){
    let bonusInner = getTextFieldValueById('amount');
    let discount = bonusInner - bonusInner * 0.20;
    bonusAmount.innerText = discount;
    // Transaction;
    const transactionContent = document.getElementById('transaction-content');
    let p = document.createElement('p');
    p.classList.add("py-2")
    p.innerText = `Added 20% discount and available balance is ${bonusAmount.innerText}`
    transactionContent.appendChild(p)

   }else{
    alert('write "wisdom" to get 20% discount');
   }
});