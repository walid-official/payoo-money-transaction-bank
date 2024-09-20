function getInputFieldValueById(id){
    let inputValue =  document.getElementById(id).value;
    let convertNumber = Number(inputValue);
    return convertNumber;
}
function getTextFieldValueById(id){
    let inputInnerText =  document.getElementById(id).innerText;
    let convertTextNumber = Number(inputInnerText);
    return convertTextNumber;
}

function showSectionById(id){
    document.getElementById('container-add-money').classList.add('hidden')
    document.getElementById('container-cash-out').classList.add('hidden')
    document.getElementById('container-transfer-money').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}