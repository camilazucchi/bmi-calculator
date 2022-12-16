// declarando as variáveis resultado, altura e peso e utilizando o dom.
const bmiResult = document.querySelector('#bmi-result');
const classificationResult = document.querySelector('#classification-result');
const height = document.querySelector('#input-height');
const weight = document.querySelector('#input-weight');

function calcBMI()  {
    if (height.value !== '' && weight.value !== '') {
        const bmi = (weight.value / (height.value * height.value)).toFixed(2);
        let classification = classificationResult;

        if (bmi >= 0 && bmi <= 16.9) {
            bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
            classification.innerHTML = `Você está muito abaixo do peso.`;
        } else if (bmi >= 17 && bmi <= 18.4) {
            bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
            classification.innerHTML = `Você está abaixo do peso.`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
            classification.innerHTML = `Você está com o peso normal.`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
            classification.innerHTML = `Você está acima do peso.`;
        } else if (bmi >= 30 && bmi <= 34.9) {
            bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
            classification.innerHTML = `Você está com obesidade grau I.`;
        } else if (bmi >= 35 && bmi <= 40) {
            bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
            classification.innerHTML = `Você está com obesidade grau II.`;
        } else if (bmi > 40) {
            bmiResult.innerHTML = `Seu IMC é: ${bmi}.`
            classification.innerHTML = `Você está com obesidade grau III.`;
        } else {
            classification.innerHTML = `Erro, digite um valor válido.`
        }
    }
}
