import './App.css';
// import MyFirstComponent from '../my-first-component/MyFirstComponent';
// import UserList from './Lecture_1/user-list/UserList';
// import TestClassComponent from './TestClassComponent';
// import TestClassComponent2 from './TestClassComponent2';
// import Counter from '../Counter';
import { useState } from 'react';
// import Header from '../Lecture_2/header/Header'
// import Sidebar from '../Lecture_2/sidebar/Sidebar'
// import Content from '../Lecture_2/content/Content'
// import Footer from '../Lecture_2/footer/Footer'

import { useEffect} from 'react';
import useDocumentTitle from './Lecture_3/useDocumentTitle';
import useText from './Lecture_3/useText';


function App() {
  const { color, counter, setCounter, setColor} = useDocumentTitle();
  const { setText } = useText();

  const handleClickCounter = () => {
    setCounter(counter + 1);
  }

  const handleClickColor = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  }

  const handleClickText = (event) => {
    if (event.keyCode === 13){
      setText(event.target.value);
  }
  }
  // const [counter, setCounter] = useState(0);
  // const [isBackRed, setIsBackRed] = useState(false);

  // useEffect(() => {
  //   console.log('Ápp inserted in DOM');
  //   return () => {
      
  //   }
  // }, []);

  // useEffect(() => {

  // }, [counter]);

  return (
    <div className='App'>

<button onClick={handleClickCounter}>increase counter {counter}</button>
<button onClick={handleClickColor}>color</button>

<input type="text" onKeyDown={handleClickText}></input>

      {/* <MyFirstComponent></MyFirstComponent>
      <UserList></UserList>
      <TestClassComponent label="Test"></TestClassComponent>
      <TestClassComponent2></TestClassComponent2> */}
      {/* 
      <Counter counter={counter} handleClick={() => setCounter(counter + 1)}></Counter> */}
      {/* <Header></Header>
      <div className="main-block">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
      <Footer></Footer> */}

      

    </div>
  );
}

export default App;

// const getClass = (isBackRed) => (isBackRed ? "App red" : "App");
