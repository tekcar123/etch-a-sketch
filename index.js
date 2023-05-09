for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    document.getElementById("parent").appendChild(div);
    div.class = "columns"
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.background = "red";
        div.style.border = "2px solid black";
        document.body.appendChild(div);
    }
}