const addValue = document.getElementById("addValue");
const btn = document.getElementById("btnAdd");
const addP = document.getElementsByClassName("add");

function emptyCheck() {
    if (addValue.value.length == 0) {
        alert("Please add your tasks.");
    }
}


btn.addEventListener("click", () => {
    if (addValue.value.length == 1) {
        alert("Please add your tasks!");
    }
    else {
        //creating checkbox
        const check = document.createElement("input");

    

        //assinging the attributes to created checkbox
        check.type = "checkbox";
        check.name = "name";
        check.value = "value";
        check.id = "id";
        addP[0].appendChild(check);

        //creating label
        const label = document.createElement('label');
        label.class = "labelFor";
        label.htmlFor = "id";
        label.appendChild(document.createTextNode(addValue.value.toUpperCase()));
        addP[0].appendChild(check);
        addP[0].appendChild(label);


        //creating button element
        const btnNode = document.createElement("button")
        const line = document.createElement("BR");
        const cTextNode = document.createTextNode("Delete")
        btnNode.appendChild(cTextNode);
        //appending btnNode to node
        label.appendChild(btnNode);
        label.appendChild(line);
        btnNode.classList.add("buttonList");

        btnNode.addEventListener("click", () => {
            check.remove();
            label.remove();
            btnNode.remove();
        })

        addValue.value = " ";
    }
})


