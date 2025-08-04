let count = 0;

function increaseCount(){
    count++;
    function displayCount(){
        document.getElementById('countDisplay').innerHTML = count;
        //This is closure because we area accessing the variable from outer function.
    }
    displayCount();
}

