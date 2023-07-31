let body = document.querySelector("body")
body.style.backgroundColor = "blue"

let image = document.querySelectorAll("img")
for(i=0; i < image.length;i++){
    image[i].style.border = "thick dotted orange"
}

let pokemon_title = document.querySelector("h1");
pokemon_title.style.textDecoration = "underline"

let end = document.querySelector("footer")
end.innerHTML = "ALL STAR CODE | DOM PROJECT"
