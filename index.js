
 function toeliminate(){
    let list= document.querySelector("#tasklist")
    list.innerHTML =""
}

function check() {
    let checkbox = document.querySelector("#completedonly").checked
    if (checkbox) {
        let done = document.querySelectorAll(".done")
        console.log(done)
        for (let i = 0; i < done.length; i ++){
            done[i].classList.add("hidden")
        }
        console.log(done)
    }
    else {
        let hidden = document.querySelectorAll(".hidden")
        for(let i = 0; i < hidden.length; i++)
            hidden[i].classList.remove("hidden")
    }
}



    function add() {
        let mytask = document.querySelector("[type=text]").value 
        let list = document.querySelector("#tasklist")
        if(mytask){        let task = document.createElement("li")
        task.classList.add("list")
        task.innerText = mytask
        list.appendChild(task)

        task.addEventListener("click", (e) => e.currentTarget.classList.toggle("done"))
          
        } else {  mytask=""
            alert("You must insert a text!")

    } }





