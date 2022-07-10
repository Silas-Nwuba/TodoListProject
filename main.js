window.onload = function(){
    alert("Thank for Visting My Project");

    const inputfield = document.getElementById("input-Field");
    const btn = document.getElementsByClassName("btn")[0];
    if(inputfield.value.trim() !=""){
        const errorMessage = document.getElementById("demo");
        errorMessage.style.display = "none";
    }

    btn.addEventListener("click", () => {
        if (inputfield.value.trim() != 0) {
            let localitems = JSON.parse(localStorage.getItem("localitem"));
            if (localitems === null) {
                taskList = [];
            }
            else {
                taskList = localitems;
            }
            taskList.push(inputfield.value);
            localStorage.setItem("localitem", JSON.stringify(taskList));
            inputfield.value = '';
            showList();
        }
        if(inputfield.value == "" || inputfield.value == null)
        {
            const errorMessage = document.getElementById("demo");
                errorMessage.innerHTML = "Please movie name is required ";
            
        }
        
    });

}
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
    function deletes(index){
       var alertbtn = confirm("Are you sure you want delete this movie?");
      if(alertbtn == true){
        taskList.splice(index,1);
        localStorage.setItem("localitem",JSON.stringify(taskList));
        showList();
       }
   
    }
    let clearbtn = document.getElementById("clearbtn");
    clearbtn.addEventListener("click", function () {
        localStorage.clear();
        showList();
    });



