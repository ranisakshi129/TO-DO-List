let inputs=document.getElementById("inp");
let text=document.querySelector(".text");
    // const listValue=document.querySelector(".todo");
    // const addTodoList=(e)=>{
    //     e.preventDefault();
    //     const liElement=document.createElement("li");
    //     liElement.textContent=listValue.value;
    //     todoList.appendChild(liElement);

    // };
    // document.querySelector('.btn').addEventListener('click',(e)=>
    // {
    //     addTodoList(e);
    // });
    function Add(){
        if(inputs.value ==""){
            alert("Please Enter task");
        }
        else{
            let newElement=document.createElement("ul");
            newElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
            text.appendChild(newElement);
            inputs.value="";
            newElement.querySelector("i").addEventListener("click",remove);
            function remove(){
                newElement.remove();
            }        }
    }