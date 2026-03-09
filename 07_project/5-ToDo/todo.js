let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {

    // Create list item
    let item = document.createElement("li");
    item.innerHTML = inp.value;

    console.log(inp.value);

    // Clear input
    inp.value = "";

    // Create delete button
    let delbtn = document.createElement("button");

    delbtn.innerHTML = "delete";
    delbtn.classList.add("delete");

    // Delete functionality
    delbtn.addEventListener("click", function () {
        item.remove();
    });

    // Append
    item.appendChild(delbtn);
    ul.appendChild(item);
});