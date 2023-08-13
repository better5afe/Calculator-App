import React from 'react';

const ThemeContext = React.createContext({
	theme: 1,
	onChangeTheme: () => {},
});

export default ThemeContext;
