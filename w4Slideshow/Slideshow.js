// add an event listener that runs after the DOM is fully loaded; then a function will fire
document.addEventListener('DOMContentLoaded', initLinks);
        
// set up an array with the image locations - these will be used in the src attribute for the image
var arrPictures = ["./images/nasa.jpg","./images/Black Hole.jpg", "./images/Universe.jpg", "./images/Andromeda.jpg"]

// variable to keep track of our current image
var thePic = 0;

// function to set up the event listeners for our navigation links for the slideshow
function initLinks(){
    // add an event listener to the previous to call a function when the link is clicked
    document.getElementById("aPrevLink").addEventListener("click", processPrevious);
    // add an event listener to the next to call a function when the link is clicked
    document.getElementById("aNextLink").addEventListener("click", processNext);
}

// function will handle the "Previous" link click event
function processPrevious(event){
    // prevent the default action of the link - which could be navigation to #
    event.preventDefault();
    thePic = (thePic - 1 + arrPictures.length) % arrPictures.length;
    updateImage();
}

// function will handle the "Next" link click event
function processNext(event){
    // prevent the default action of the link - which could be navigation to #
    event.preventDefault();
    thePic = (thePic + 1) % arrPictures.length;
    updateImage();
}

// function to update the image source for the picture
function updateImage() {
    document.getElementById("imgPicture").src = arrPictures[thePic];
}