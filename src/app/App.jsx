import './App.css';
// import MyFirstComponent from '../my-first-component/MyFirstComponent';
// import UserList from '../user-list/UserList';
// import TestClassComponent from './TrstClassComponent';
// import TestClassComponent2 from './TestClassComponent2';
// import Counter from '../Counter';
import { useState } from 'react';
import Header from '../Lecture_2/header/Header'
import Sidebar from '../Lecture_2/sidebar/Sidebar'
import Content from '../Lecture_2/content/Content'
import Footer from '../Lecture_2/footer/Footer'


function App() {
  const [counter, setCounter] = useState(0);
  const [isBackRed, setIsBackRed] = useState(false);
  return (
    <div className={getClass(isBackRed)}>
      {/* <MyFirstComponent></MyFirstComponent>
      <UserList></UserList>
      <TestClassComponent label="Test"></TestClassComponent>
      <TestClassComponent2></TestClassComponent2> */}
      {/* 
      <Counter counter={counter} handleClick={() => setCounter(counter + 1)}></Counter> */}
      <Header></Header>
      <div className="main-block">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

const getClass = (isBackRed) => (isBackRed ? "App red" : "App");
