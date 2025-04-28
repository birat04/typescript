import { Component } from 'react'
type CounterProps = {
    message : string
}
type CounterState = {
    count : number
}
export class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0
    };

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message}
            </div>
        );
    }
}