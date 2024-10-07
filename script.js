const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ==='')
    {
        alert("You must write somewthing!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); //to dispay the span 
    }
    inputBox.value = "";
    saveData();
}

//the operation of the click function 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false)

//to save data and keep every new entered task
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

//show Task
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();