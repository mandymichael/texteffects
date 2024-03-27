const letter = document.getElementById("flickerLetter");
const offset = document.getElementById("flickerPosition");
const flickerItem = document.getElementById("flickerItem");


letter.addEventListener("input", function() {
    flickerItem.innerHTML = this.value;
});

offset.addEventListener("input", function() {
	flickerItem.style.setProperty("--offset", this.value);
});