const InputBox = document.getElementById("input");
const InputHeader2 = document.getElementById("input2");
const Button = document.getElementById("button");
const list = document.getElementById("list");
const array_check = [""," "];
// creat a task

const CreateTask =()=> {
    const check = array_check.every(element => element !== InputBox.value) // check if input contains at least one array element
    if(check){
        const li = document.createElement("li");
        li.innerHTML = InputBox.value;
        list.appendChild(li);
        InputBox.value = "";
        SaveData();
    }
};

// when clicking a list item then toggles the "checked" class
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
}, false);

// save data in local storage
const SaveData =()=>
    localStorage.setItem("data", list.innerHTML);

// get data from local storage
const FillData =()=> 
    list.innerHTML = localStorage.getItem("data");
FillData();