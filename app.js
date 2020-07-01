const form = document.querySelector("form");
const container = document.getElementById("container");
const body = document.getElementsByTagName("body");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submitted");
    const formImage = form.elements['URL'].value;
    const topText = form.elements['topText'].value;
    const bottomText = form.elements['bottomText'].value;
    createMeme(formImage, topText, bottomText);
    form.reset();
});

function createMeme(formImage, topText, bottomText){
    let memeDiv = document.createElement("div");
    let memeImg = document.createElement("img");
    let topTextBox = document.createElement("div");
    let bottomTextBox = document.createElement("div");
    let removeButton = document.createElement("button");

    removeButton.classList.add("remove");
    removeButton.addEventListener("click", function(e){
        e.preventDefault();
        e.target.parentElement.remove();
    });
    removeButton.innerText = "X";
 
    topTextBox.innerText = topText;
    bottomTextBox.innerText = bottomText;
    bottomTextBox.classList.add("bottom");
    topTextBox.classList.add("top");

    memeImg.src = `${formImage}`;
    memeDiv.classList.add("memeDiv");
    memeDiv.append(topTextBox, bottomTextBox, removeButton, memeImg);
    container.append(memeDiv);
}