// Declarando as variáveis resultado, altura e peso.
const bmiResult = document.querySelector('#bmi-result');
const classificationResult = document.querySelector('#classification-result');
const height = document.querySelector('#input-height');
const weight = document.querySelector('#input-weight');

const calcBMI = ( ) => {
    if (height.value !== '' && weight.value !== '') {
        const bmi = (weight.value / (height.value * height.value)).toFixed(2);
        let classification = classificationResult;

        if (bmi >= 0 && bmi < 16.9) {
            classification = 'Você está muito abaixo do peso.';
        } if (bmi == 17 && bmi <= 18.4) {
            classification = 'Você está abaixo do peso.';
        } if (bmi >= 18.5 && bmi< 24.9) {
            classification = 'Você está com o peso normal.';
        } if (bmi >= 25 && bmi < 29.9) {
            classification = 'Você está acima do peso.';
        } if (bmi >= 30 && bmi < 34.9) {
            classification = 'Você está com obesidade grau I.';
        } if (bmi >= 35 && bmi < 40) {
            classification = 'Você está com obesidade grau II.';
        } if (bmi > 40) {
            classification = 'Você está com obesidade grau III.';
        }

        bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
        classificationResult.innerHTML = `${classification}`;
    }
}