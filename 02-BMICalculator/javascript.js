const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    let guide = '';

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.6) {guide = 'Under Weight'}
        else if(18.6 < bmi < 24.9 ) {guide = 'Normal Range'}
        else {guide = 'Overweight'}
        results.innerHTML = `<span>BMI: ${bmi} (${guide})</span>`;
    }
}); 