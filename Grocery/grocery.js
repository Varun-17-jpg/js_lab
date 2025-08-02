let amt1;
let amt2;
let amt3;

function calculateTotal(){
    amt1 = parseFloat(document.getElementById('field1').value);
    amt2 = parseFloat(document.getElementById('field2').value);
    amt3 = parseFloat(document.getElementById('field3').value);
    let total = amt1 + amt2 + amt3;
    document.getElementById('result').innerText = `Total amount is : ${total}`;
}