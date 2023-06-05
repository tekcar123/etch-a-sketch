selectedColor = "black"
color = "black"

function changeSelectedColor(color) {
    selectedColor = color
    console.log(`color changed to ${color}`)
}

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    document.getElementById("parent").appendChild(div);
    div.id = (i)
    div.class = "columns"
    for (let x = 0; x < 16; x++) {
        const div = document.createElement("div");
        div.style.width = "45px";
        div.style.height = "45px";
        div.style.background = "white";
        div.style.border = "2px solid black";
        document.getElementById(i).appendChild(div);
        div.addEventListener("click", function placeColor() {
                div.style.background = selectedColor
            } )
            
    } 
} 