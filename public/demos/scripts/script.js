
// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier! 
const h1 = document.querySelector("h1");
const copy = document.getElementById("copy");

h1.addEventListener("input", function() {
    console.log(copy.value);
    copy.innerText = h1.innerText;
});

window.addEventListener('keydown',function(e) {
    if (e.keyIdentifier=='U+000A' || e.keyIdentifier=='Enter' || e.keyCode==13) {
            e.preventDefault();
            return false;
    }
}, true);

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
        const exclusionClasses = ['button'];
        return !exclusionClasses.some((classname) => node.classList?.contains(classname));
      }
      
  modernScreenshot.domToPng(document.querySelector('body'), {filter:filter}).then(dataUrl => {
    const link = document.createElement('a')
    link.download = 'screenshot.png'
    link.href = dataUrl
    link.click()
  })
}

