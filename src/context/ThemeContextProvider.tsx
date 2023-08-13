import { useState, useEffect } from 'react';

import ThemeContext from './theme-context';

interface ThemeContextProps {
	children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({
	children,
}) => {
	const [currentTheme, setCurrentTheme] = useState(1);
	const [theme, setTheme] = useState('first-theme');

	useEffect(() => {
		const body = document.querySelector('body')!;
		body.setAttribute('class', '');
		body.classList.add(theme);
	}, [theme]);

	const themeHandler = () => {
		if (currentTheme === 1) {
			setTheme('second-theme');
			setCurrentTheme(2);
		} else if (currentTheme === 2) {
			setTheme('third-theme');
			setCurrentTheme(3);
		} else if (currentTheme === 3) {
			setTheme('first-theme');
			setCurrentTheme(1);
		}
	};

	return (
		<ThemeContext.Provider
			value={{ theme: currentTheme, onChangeTheme: themeHandler }}
		>
			{children}
		</ThemeContext.Provider>
	);
};
