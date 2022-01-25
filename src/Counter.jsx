// import { useState } from "react"


// const Counter = (props) => {
//     const [counter, setCounter] = useState(0);
//     const handleClick = () => {
//         setCounter(counter + 1);
//     }
//     const [counter2, setCounter2] = useState(0);
//     const handleClick1 = () => {
//         setCounter2(counter2 + 2);
//     }
//     const [counter3, setCounter3] = useState(0);
//     const handleClick2 = () => {
//         setCounter3(counter3 + 3);
//     }
//     return <div>
//         <h1>Counter {counter}</h1>
//         <h1>Counter2 {counter2}</h1>
//         <h1>Counter3 {counter3}</h1>
//         <h1>Sum {counter + counter2 + counter3}</h1>
//         <button onClick={handleClick}>increment1</button>
//         <button onClick={handleClick1}>increment2</button>
//         <button onClick={handleClick2}>increment3</button>
//     </div>
// }

// export default Counter;


const Counter = (props) => {
    const { counter, handleClick } = props;

return (<>
    <button onClick={handleClick}>increment + 1</button>
    {counter}
    <br></br>
    app counter {props.appCounter}
</>
);
}
export default Counter;