const expression = document.querySelector('#expression');
const result = document.querySelector('#result');

expression.addEventListener('keydown', (event) => {
	if (event.key !== 'Enter') return;
	event.preventDefault();

	const match = expression.value.trim().match(/^(-?\d+(?:[.,]\d+)?)\s*([+\-*/])\s*(-?\d+(?:[.,]\d+)?)$/);
	if (!match) {
		result.value = 'Digite uma conta simples, como 2 + 3';
		return;
	}

	const first = Number(match[1].replace(',', '.'));
	const second = Number(match[3].replace(',', '.'));
	const operations = {
		'+': first + second,
		'-': first - second,
		'*': first * second,
		'/': second === 0 ? null : first / second
	};
	const value = operations[match[2]];
	result.value = value === null
		? 'Não é possível dividir por zero'
		: new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 8 }).format(value);
});
