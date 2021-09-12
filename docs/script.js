function SelectAll () {
    const checkboxes = document.getElementsByClassName("form-check-input")
    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = true;
    }
}
function DeselectAll () {
    const checkboxes = document.getElementsByClassName("form-check-input")
     for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
}
function SubmitClick() {
    const name = document.getElementById("yourName").value;
    if (name === ''){
        document.getElementById("welcome").innerText = 'welcome User'
    } else {
        document.getElementById("welcome").innerText = 'welcome ' + name
    }
}
function Reset () {
   const checkboxes = document.getElementsByClassName("form-check-input")
    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
    document.getElementById("welcome").innerText = 'welcome User'
    document.getElementById("yourName").value = ''
}