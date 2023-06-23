import React, { Component } from "react";
import Main from "./Components/Main";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state to display fallback UI
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Fallback UI when an error occurs
			return <div>Something went wrong. Please try again later.</div>;
		}

		// Render the wrapped component
		return this.props.children;
	}
}

// Wrap the Main component or its parent component with the ErrorBoundary
const App = () => {
	return (
		<ErrorBoundary>
			<Main />
		</ErrorBoundary>
	);
};

export default App;
