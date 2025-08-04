let count = 0;

function increaseCount(){
    count++;
    function displayCount(){
        document.getElementById('countDisplay').innerHTML = count;
        //This is closure because we area accessing the variable from outer function.
    }
    displayCount();
    checkCountValue();//This is example of hoisting.
}

function checkCountValue(){
    if(count === 10){
        alert("Congratulations on reaching 10 followers");
    }else if(count === 20){
        alert("Congratulations on reaching 20 followers");
    }
}

