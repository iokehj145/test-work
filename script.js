const InputBox = document.getElementById("input");
const InputHeader2 = document.getElementById("input2");
const Button = document.getElementById("button");
const list = document.getElementById("list");
const array_check = [""," "];
function showSelectedTime() {
    const timeInput = document.getElementById("timePicker");
    const selectedTime = timeInput.value;
    
    // Display the selected time
    const display = document.getElementById("displayTime");
    if (selectedTime) {
      display.textContent = `Selected time is: ${selectedTime}`;
    } else {
      display.textContent = "Please select a time.";
    }
  }
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
const UpdatePage =()=> {
    const SavedData = localStorage.getItem("data");
    if (SavedData) list.innerHTML = SavedData;
    const SavedTheme = localStorage.getItem("theme");
    if(SavedTheme) ClickTheme(localStorage.getItem("theme"));
}
// toggle menu
const ActiveteNav = () => document.getElementsByClassName('All_theme')[0].classList.toggle('active');
// switch theme
const ClickTheme = (theme) => {
    const body = document.body;
    const themes = {
        w: "linear-gradient(50deg, #fff 50%, #999 100%)",
        b: "linear-gradient(135deg, #5d7275 10%, #a0dcd8)",
        g: "linear-gradient(90deg, rgba(83,210,110,1) 38%, rgba(94,181,15,1) 69%)",
        y: "linear-gradient(90deg, rgba(249,186,90,1) 37%, rgba(211,212,40,1) 69%)",
    };
    if (themes[theme]) {
        body.style.background = themes[theme];
        localStorage.setItem("theme", theme);
    } else {
        console.error("Invalid theme:", theme);
    }
};
UpdatePage();