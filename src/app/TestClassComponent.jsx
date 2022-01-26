import { Component } from 'react';

class TestClassComponent extends Component {
    // static defaultProps = {
    //     label: 'Default Label Text'
    // }
    state = {
        count: 0
    }
    handelClickplus = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 })
    }
    handelClickminus = () => {
        const { count } = this.state;
        this.setState({ count: count - 1 })
    }
    render() {
        const { count } = this.state;
        const { label } = this.props;
        return (<div>
            <h1>{label}</h1>;
            {this.state.count}
            <button onClick={this.handelClickplus}>increase</button>
            <button onClick={this.handelClickminus}>decrease</button>
        </div>)
    }
}

TestClassComponent.defaultProps = {
    label: 'Default label text'
}

export default TestClassComponent;