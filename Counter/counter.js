let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();//This is example of hoisting.
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}
function checkCountValue(){
    if(count === 10){
        alert("Congratulations on reaching 10 followers");
    }else if(count === 20){
        alert("Congratulations on reaching 20 followers");
    }
}

function resetCount(){
    count = 0;
    displayCount();
    alert("Followers Count has been set to 0");
}