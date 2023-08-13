import React from 'react';

const CalcContext = React.createContext({
	calcValue: '',
	resultValue: '',
	errorValue: '',
	onCalc: (btnValue: string) => {},
	onExp: () => {},
	onEquals: () => {},
	onDelete: () => {},
	onClear: () => {},
});

export default CalcContext;
