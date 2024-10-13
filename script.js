const InputBox = document.getElementById("input");
const InputHeader2 = document.getElementById("input2");
const Button = document.getElementById("button");
const list = document.getElementById("list");
const array_check = [""," "];
// creat a task

const CreateTask =()=> {
    const check = array_check.every(element => element !== InputBox.value) // check if input contains at least one array element
    if(check){
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        InputBox.value = "";
        SaveData();
    }
};

// when clicking a list item then toggles the "checked" class or removes it
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

// save data in local storage
const SaveData =()=>
    localStorage.setItem("data", list.innerHTML);

// get data from local storage
const ListToFill =()=> 
    list.innerHTML = localStorage.getItem("data");
ListToFill();