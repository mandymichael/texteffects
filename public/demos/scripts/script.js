
// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier! 
const h1 = document.querySelector("h1");
const copy = document.getElementById("copy");

h1.addEventListener("input", function() {
    copy.innerText = h1.innerText;
});

window.addEventListener('keydown',function(e) {
    if (e.keyIdentifier=='U+000A' || e.keyIdentifier=='Enter' || e.keyCode==13) {
            e.preventDefault();
            return false;
    }
}, true);

const increment = document.getElementById('up');
const decrement = document.getElementById('down');

const step = 2;

increment.onclick = function() {
 const style = window.getComputedStyle(h1, null).getPropertyValue('font-size');
 const fontSize = parseFloat(style); 
 h1.style.fontSize = (fontSize + 2) + 'px';
 copy.style.fontSize = (fontSize + 2) + 'px';
};

decrement.onclick = function(){
    const style = window.getComputedStyle(h1, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style); 
    h1.style.fontSize = (fontSize - 2) + 'px';
    copy.style.fontSize = (fontSize - 2) + 'px'; 
};

var button = document.getElementById('button');
button.addEventListener('mousedown', onScreenShotClick);

function download( canvas, filename ) {
	const a = document.createElement('a');
    a.download = filename;
	a.href = canvas.toDataURL("image/png;base64");

	a.style.display = 'none';
	document.body.appendChild( a );
	a.click();
	document.body.removeChild( a );
}

function onScreenShotClick(event){

    const filter = (node) => {
        const exclusionClasses = ['button', 'font-size-wrapper', 'dialog'];
        return !exclusionClasses.some((classname) => node.classList?.contains(classname));
      }
      
  modernScreenshot.domToPng(document.querySelector('body'), {quality: 1, filter:filter}).then(dataUrl => {
    const link = document.createElement('a')
    link.download = 'screenshot.png'
    link.href = dataUrl
    link.click()
  })
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
