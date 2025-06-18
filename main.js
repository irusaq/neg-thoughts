// Indira Ruslanova
// Storytelling with animating

var girl = document.getElementById("girl");
var thought = document.getElementById("thought");
var originalSrc = girl.src;
var girlArr = ["da.png","da2.png","da3.png","da4.png","da5.png","da6.png"];
var thoughtArr1 = ["1.png","2.png","3.png","4.png","5.png"];
var thoughtArr2 = ["7.png","8.png","9.png","10.png"];
var thoughtArr3 = ["11.png","12.png","13.png","14.png"]
var thoughtArr4 = ["15.png","16.png","17.png","18.png"];
var currInd = 0;
var thoughtInterval = null;

girl.addEventListener("mousedown", function(){
    currInd = (currInd+1) % girlArr.length;
    girl.src = girlArr[currInd];
    originalSrc = girlArr[currInd]; // updating the stored image
    loopThoughts();

    girl.classList.add("clicked");
    setTimeout(() => {
    girl.classList.remove("clicked");
    }, 100); // duration matches transition
});

girl.addEventListener("mouseenter", function () {
    if (currInd == 0){
        originalSrc = girl.src; // saving original image
        girl.src = "da2.png"; // show hover image
    }
});

girl.addEventListener("mouseleave", function () {
    if (currInd == 0){
        girl.src = originalSrc; // restoring the original
    }
});

function loopThoughts() {
    clearInterval(thoughtInterval);
    console.log("girl.src:", girl.src);
    console.log("currInd:", currInd);
    
    if (currInd==0 || currInd==1) {
        console.log("Starting thought animation");
        let thoughtInd = 0;
        thoughtInterval = setInterval(function () {
            thought.src = thoughtArr1[thoughtInd];
            console.log("Changing thought to:", thought.src);
            thoughtInd = (thoughtInd + 1) % thoughtArr1.length;
        }, 300); // change every 200ms
    }else if (currInd==2){
        console.log("Starting thought animation");
        let thoughtInd = 0;
        thoughtInterval = setInterval(function () {
            thought.src = thoughtArr2[thoughtInd];
            console.log("Changing thought to:", thought.src);
            thoughtInd = (thoughtInd + 1) % thoughtArr2.length;
        }, 300); // change every 200ms
    }else if (currInd==3){
        console.log("Starting thought animation");
        let thoughtInd = 0;
        thoughtInterval = setInterval(function () {
            thought.src = thoughtArr3[thoughtInd];
            console.log("Changing thought to:", thought.src);
            thoughtInd = (thoughtInd + 1) % thoughtArr3.length;
        }, 300); // change every 200ms
    }else if (currInd==4){
        console.log("Starting thought animation");
        let thoughtInd = 0;
        thoughtInterval = setInterval(function () {
            thought.src = thoughtArr4[thoughtInd];
            console.log("Changing thought to:", thought.src);
            thoughtInd = (thoughtInd + 1) % thoughtArr4.length;
        }, 300); // change every 200ms
    } else {
        //clearing the thought image if not on the right girl img
        thought.src = "";
        //clearing the alt txt from being displayed when there is no thought img
        thought.alt = "";
    }
}
