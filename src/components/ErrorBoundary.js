import React from 'react';

class ErrorBoundry extends React.Component {
    constructor() {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>OOOOps. That's nnnnnnot good</h1>
        }

    }
}

export default ErrorBoundry;