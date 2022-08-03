// Declarando as variáveis resultado, altura e peso.
const bmiResult = document.querySelector('#bmi-result');
const classificationResult = document.querySelector('#classification-result');
const height = document.querySelector('#input-height');
const weight = document.querySelector('#input-weight');

const calcBMI = ( ) => {
    if (height.value !== '' && weight.value !== '') {
        const imc = (weight.value / (height.value * height.value)).toFixed(2);
        let classification = '#table-result';

        if (imc >= 0 && imc < 16.9) {
            classification = 'Você está muito abaixo do peso.';
        } if (imc == 17 && imc <= 18.4) {
            classification = 'Você está abaixo do peso.';
        } if (imc >= 18.5 && imc < 24.9) {
            classification = 'Você está com o peso normal.';
        } if (imc >= 25 && imc < 29.9) {
            classification = 'Você está acima do peso.';
        } if (imc >= 30 && imc < 34.9) {
            classification = 'Você está com obesidade grau I.';
        } if (imc >= 35 && imc < 40) {
            classification = 'Você está com obesidade grau II.';
        } if (imc > 40) {
            classification = 'Você está com obesidade grau III.';
        }

        bmiResult.innerHTML = `Seu IMC é: ${imc} ${classification}`;
    }
}