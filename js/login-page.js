// let inputPhone = getInputFieldValueById('phone-input');
// let inputPin = getInputFieldValueById('input-pin');

// Question-1 : keno ata to value store koreche tahole atar length diya keno ami condition check korte parchi na

let inputPhoneStore = document.getElementById('phone-input')
let inputPinStore = document.getElementById('input-pin')


document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        if(inputPhoneStore.value.length !== 11 || inputPinStore.value.length !== 4){
            alert("Write minimum 11 digits And Give Minimum 4 pin Numbers");
        }else{
            window.location.href = './dashboard.html';
        }
    });
