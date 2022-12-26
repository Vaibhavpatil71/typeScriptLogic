//index.txt is the entry point for the react app  where we mount on the root dom and App.txs contain app  component which is the root component this is the first learning for react appcode

// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MenuNavigation from './components/MenuNavigation';
import { Route, Routes } from 'react-router-dom';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Form from './components/Form';
import Button from './components/Button';
import InputComponent from './components/Input';
import Heading from './components/Heading';
// import HeaderContent from './components/HeaderContent';



function App() {
  const personName = {
    first: 'Demo 1',
    last: 'Demo 2',

  }
  const NameList = [
    {
      first: 'Demo 3',
      last: 'Demo 4',
    },
    {
      first: 'Demo 5',
      last: 'Demo 6',
    },
    {
      first: 'Demo 7',
      last: 'Demo 8',
    },

  ]
  return (
    <>
      <div className="App">
        {/* <Welcome name='Legend' number={2022} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={NameList}/>
    <Status status="loading"/> */}
        {/* <HeaderContent/> */}
        <MenuNavigation />
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>

      <Banner />
      <Form />

       <Button handleClick={(event)=>{
        console.log('Button clicked',event)
      }}/>
      {/* <Input value='' handleChange={(event)=>console.log(event)} />  */}

      {/* <Heading>
      Place holder text
    </Heading> */}
    <InputComponent />
    </>

  );
}

export default App;
