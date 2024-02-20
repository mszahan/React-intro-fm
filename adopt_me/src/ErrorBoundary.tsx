import { Component, ErrorInfo, ReactElement } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary causght and error', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">click herer</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
