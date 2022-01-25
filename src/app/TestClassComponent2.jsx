import {Component} from 'react';
 
class TestClassComponent2 extends Component {
    state = {
        count: 0
    }
    handelClick = () =>{
        const {count} = this.state;
this.setState({ count: count - 1})
    }
    render() {
        const {count} = this.state;
        return(<div>{this.state.count}
        <button onClick={this.handelClick}>decrease</button>
        </div>)
    }
}

export default TestClassComponent2;