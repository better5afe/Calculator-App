import React from 'react';

interface HistoryItem {
	value: string;
	id: string;
}

interface ContextProps {
	list: HistoryItem[];
	isOpen: boolean;
	closeHistoryHandler: () => void;
	openHistoryHandler: () => void;
	clearHistoryHandler: () => void;
	addHistoryItemHandler: (item: HistoryItem, result: string) => void;
}

const HistoryContext = React.createContext<ContextProps>({
	list: [],
	isOpen: false,
	closeHistoryHandler: () => {},
	openHistoryHandler: () => {},
	clearHistoryHandler: () => {},
	addHistoryItemHandler: (item, result) => {},
});

export default HistoryContext;
