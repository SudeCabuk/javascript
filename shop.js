let button = document.getElementById("btn");
button.onclick = function (){
let textArea = document.getElementById("text");
    if(textArea.value !==""){
    let li = document.createElement("li");
    li.innerHTML = textArea.value;

    li.style.fontFamily = "Arial";
    li.style.textAlign = "left" ;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.onclick = function() {
        li.remove(); 
    };

    li.appendChild(deleteButton);
    document.getElementById("list").appendChild(li);
    textArea.value="";
  }
 }