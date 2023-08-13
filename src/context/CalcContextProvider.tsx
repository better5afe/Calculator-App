import { useState } from 'react';
import CalcContext from './calc-context';

interface CalcContextProps {
	children: React.ReactNode;
}

export const CalcContextProvider: React.FC<CalcContextProps> = ({
	children,
}) => {
	const [calc, setCalc] = useState('');
	const [result, setResult] = useState('');
	const [error, setError] = useState('');

	const operators = ['+', '-', '*', '/', '.'];

	const calcHandler = (btnValue: string) => {
		setResult('');

		if (+calc === Infinity) {
			return;
		}

		if (error) {
			setError('');
		}

		

		if (calc === '') {
			if (
				btnValue !== '-' &&
				btnValue !== '.' &&
				operators.includes(btnValue)
			) {
				return;
			} else if (btnValue === '-') {
				setCalc(btnValue);
				return;
			} else if (btnValue === '0') {
				return;
			}
		}

		if (operators.includes(calc.slice(-1)) && operators.includes(btnValue)) {
			setCalc((previousState) => {
				return previousState.slice(0, -1) + btnValue;
			});
			return;
		}

		if (btnValue === '.') {
			if (calc === '' || operators.includes(calc.slice(-1))) {
				setCalc('0.');
				return;
			}
			const numbers = calc.split(/[-+*/]/);
			if (numbers[numbers.length - 1].includes('.')) {
				return;
			}
		}

		if (calc.length > 31) {
			setError('Value too long');
			setCalc('');
			return;
		}

		setCalc((previosState) => {
			return previosState + btnValue;
		});
	};

	const expHandler = () => {
		if (calc.length > 31) {
			setError(`Value too long`);
			setCalc('');
			return;
		}

		if (operators.includes(calc.slice(-1))) {
			const withoutOperator = calc.slice(0, 1);
			setResult(withoutOperator);
			setCalc((+withoutOperator * +withoutOperator).toString());
		}

		setResult(calc);
		setCalc((+calc * +calc).toString());
	};

	const equalsHandler = () => {
		if (calc === '' || result) {
			return;
		}

		if (calc.slice(-2) === '/0') {
			setError('Impossible to divide by 0');
			setCalc('');
			return;
		}

		if (operators.includes(calc.slice(-1))) {
			const withoutOperator = calc.slice(0, -1);
			setResult(withoutOperator);
			setCalc(eval(withoutOperator).toString());
			return;
		}

		if (calc.slice(1) === '0' && calc.slice(2) !== '.') {
			const withoutZero = calc.slice(0, 1);
			setResult(withoutZero);
			setCalc(eval(withoutZero).toString());
			return;
		}

		setResult(calc);
		setCalc(eval(calc).toString());
	};

	const deleteHandler = () => {
		if (calc === '' || +calc === Infinity) {
			return;
		}

		setCalc((previousState) => {
			return previousState.slice(0, -1);
		});
	};

	const clearHandler = () => {
		setCalc('');
		setError('');
	};

	return (
		<CalcContext.Provider
			value={{
				calcValue: calc,
				resultValue: result,
				errorValue: error,
				onCalc: calcHandler,
				onExp: expHandler,
				onEquals: equalsHandler,
				onDelete: deleteHandler,
				onClear: clearHandler,
			}}
		>
			{children}
		</CalcContext.Provider>
	);
};
