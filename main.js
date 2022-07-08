
    const inputfield = document.getElementById("input-Field");
    const btn = document.getElementsByClassName("btn")[0];
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
                        <button class="btn btn-danger" onclick="deletes(${index})">Delete</button>
                      </td>
                      </tr>
                      `
        });
        taskdolists.innerHTML = output;
    }
    showList();
    function deletes(index){
    taskList.splice(index,1);
    localStorage.setItem("localitem",JSON.stringify(taskList));
    showList();
    }
    let clearbtn = document.getElementById("clearbtn");
    clearbtn.addEventListener("click", function () {
        localStorage.clear();
        showList();
    });
    // function deletes(data) {

    //     console.log(data);
    //     // let localitem = JSON.parse(localStorage.getItem("localitem"));
    //     // taskList.splice(index, 1);
    //     // console.log(taskList);
    //     // localStorage.setItem("localitem", JSON.stringify(taskList));
    //     //  showList();
    // }
 

