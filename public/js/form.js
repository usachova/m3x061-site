const inputBox = document.querySelector(".inputField input")
const addButton = document.querySelector(".inputField button")
const listOfRecords = document.querySelector(".listOfRecords")

let entryLocalStorage = localStorage.getItem("new entry");
let listRecords = [];
if (entryLocalStorage) {
    listRecords = JSON.parse(entryLocalStorage);
}
showRecords();

function showRecords() {
    let newLiTag = '';
    listRecords.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteRecord(${index})">✖️</span></li>`
    });
    listOfRecords.innerHTML = newLiTag;
}

addButton.onclick = ()=> {
    let text = inputBox.value;
    if (text !== "") {
        listRecords.push(text);
    }
    localStorage.setItem("new entry", JSON.stringify(listRecords));
    showRecords()
}

function deleteRecord(index) {
    listRecords.splice(index, 1);
    localStorage.setItem("new entry", JSON.stringify(listRecords));
    showRecords()
}
