

document.querySelector('#loan-form').addEventListener('submit', function(e){
   
    document.querySelector('#results').style.display = 'none';
    
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});


function calculateResults(){
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    var amount = document.getElementById('amount').value;
    var percentage = document.getElementById('percentage').value;
    var monthlyRate = percentage / 12 / 100;  
    var years = document.getElementById('period').value;
    var months = years * 12;  
    var futureValue = amount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    alert(futureValue)
    if(futureValue>0){
        monthlyPayment.value = amount;
        totalPayment.value = Math.round(futureValue);
        const totalMonthsAmount= amount*months;
        totalInterest.value = Math.round(futureValue-totalMonthsAmount);
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    } else {
        checkError('Please check your inputs');
    }
}

function checkError(error){
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(removeError, 4000);
}

function removeError(){
    document.querySelector('.alert').remove();
}