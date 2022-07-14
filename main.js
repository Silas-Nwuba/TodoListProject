
const inputfield = document.getElementById("input-Field");
const btn = document.getElementsByClassName("btn")[0];
const errorMessage = document.getElementById("demo");
// var regex =/^[A-Za-z]{3}\s$/
function myFunction() {
    if (inputfield.value.trim() === "" || inputfield.value.trim() === null) {
        const errorMessage = document.getElementById("demo");
        errorMessage.innerHTML = "please enter the movie name";
        errorMessage.style.fontSize = "16px";
        errorMessage.style.display = "block";
    }
    else if (inputfield.value.trim() != "" || inputfield.value.trim() != null) {
        const errorMessage = document.getElementById("demo");
        errorMessage.style.display = "none";
        inputfield.value = inputfield.value.toUpperCase()
    }
}
btn.addEventListener("click", () => {
    if (inputfield.value.trim() != 0) {
        let localitems = JSON.parse(localStorage.getItem("localitem"));

        if (localitems === null) {
            taskList = [];
        }
       else if (inputfield.value.length < 5 || inputfield.value.length > 50) {
            const errorMessage = document.getElementById("demo");
            errorMessage.style.display = "block";
            errorMessage.innerHTML = "Movie name should be atleast between 5 and 50 character";
            return false;
        }
            taskList.unshift(inputfield.value);
            localStorage.setItem("localitem", JSON.stringify(taskList));
            showList();
            window.location.reload();
    }
    
    if (inputfield.value.trim() == "" || inputfield.value.trim() == null) {
        const errorMessage = document.getElementById("demo");
        errorMessage.innerHTML = "Please enter the movie name";
        return false;
    }
    else if (inputfield.value.length < 5 || inputfield.value.length > 50) {
        const errorMessage = document.getElementById("demo");
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Movie name should be atleast between 5 and 50 character";
        return false;
    }
  
});
function showList() {
    let output = '';
    let taskdolists = document.querySelector("#table-body")
    let localitems = JSON.parse(localStorage.getItem("localitem"));
    if (localitems === null) {
      taskList = [];
    }
    else {
        taskList = localitems;
    }
    taskList.forEach((data, index) => {
        output +=
            ` <tr>
                    <td>${data}</td>
                        <td>
                        <button class="btn btn-danger"style="outline:none" onclick="deletes(${index})">Delete</button>
                      </td>
                      </tr>
                      `
    });
    taskdolists.innerHTML = output;
}
showList();
function deletes(index) {
    var alertbtn = confirm("Are you sure you want delete this movie?");
    if (alertbtn == true) {
        taskList.splice(index,1);
        localStorage.setItem("localitem", JSON.stringify(taskList));
        showList();
        window.location.reload();
    }
}
let clearbtn = document.getElementById("clearbtn");
clearbtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
    showList();
     
});
//to put the total Movies added
const totalMoivies = document.getElementById("totalMovies");
totalMoivies.innerHTML = "Total Movies : " + " " + taskList.length;
totalMoivies.style.fontSize = "17px";