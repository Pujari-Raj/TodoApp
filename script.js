window.addEventListener("load", () => {
    //alert('js called')
    // Gathering elements
    const user_form = document.querySelector(".user_task_form");
    const user_input = document.querySelector("#user-task");
    const list_tasks = document.querySelector(".tasks");

    user_form.addEventListener('submit', (element) => {
        element.preventDefault();

        // checking if user directly clicks the add-task btn
        if (user_input.value == "") {
            alert('please add some task before adding')
        }

        else{

            const task = user_input.value;
        
            //console.log('adding task');
            // creating task div
            const task_div = document.createElement('div');
            task_div.classList.add("task");
    
            // creating task-content div
            const task_div_content = document.createElement('div');
            task_div_content.classList.add("task-content");
    
            task_div.appendChild(task_div_content);
    
            // creating input tag to edit
            const user_input_edit = document.createElement("input");
            user_input_edit.classList.add("edit_task");
            user_input_edit.type = 'text';
            user_input_edit.value = task;
            user_input_edit.setAttribute('readonly', 'readonly');
            user_input_edit.style.fontFamily = "'Montserrat', sans-serif";
    
            task_div_content.appendChild(user_input_edit);
    
           // creating actions div(edit, delete)
            const actions_div = document.createElement('div');
            actions_div.classList.add('actions');
        
            // creating edit btn
            const edit_btn = document.createElement("button");
            edit_btn.classList.add("edit_btn");
            edit_btn.innerText = "EDIT";
    
            // creating delete btn
            const delete_btn = document.createElement("button");
            delete_btn.classList.add("delete_btn");
            delete_btn.innerText = "DELETE";
    
            actions_div.appendChild(edit_btn);
            actions_div.appendChild(delete_btn);
    
            task_div.appendChild(actions_div);
    
            list_tasks.appendChild(task_div);
    
            edit_btn.addEventListener("click",() => {
                //console.log('editing task');

                if(edit_btn.innerText.toLowerCase() == "edit"){
                    edit_btn.innerText = "Save";
                    user_input_edit.removeAttribute("readonly");
                    user_input_edit.focus();
                }
                else{
                    edit_btn.innerText = "Edit";
                    user_input_edit.setAttribute("readonly", "readonly"); 
                }
            });
    
            delete_btn.addEventListener("click", () => {
                //console.log('deleted');
                list_tasks.removeChild(task_div);
            });    
        }
    });
})