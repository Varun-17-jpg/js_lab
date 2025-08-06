const submitButton = document.getElementById('submitBtn');
function submitFeedback(){
    const userName = document.getElementById('name').value;
    const userAge = document.getElementById('age').value;
    const userEmail = document.getElementById('email').value;
    const userJob = document.getElementById('job').value;
    const userDesignation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedbackText = document.getElementById('feedbackText').value;

    function display(){
        document.getElementById('userName').innerHTML = userName;
        document.getElementById('userAge').innerHTML = userAge;
        document.getElementById('userEmail').innerHTML = userEmail;
        document.getElementById('userJob').innerHTML = userJob;
        document.getElementById('userDesignation').innerHTML = userDesignation;
        document.getElementById('userProductChoice').innerHTML = productType;
        document.getElementById('userFeedback').innerHTML = feedbackText;
    }
    display();
    document.getElementById('userInfo').style.display = 'block';
    alert('Thankyou for your feedback');
}
submitButton.addEventListener('click', submitFeedback);
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        submitFeedback();
    }
});
