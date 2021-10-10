import React from 'react'
import './App.css';
// import './Requests'
import Leftside  from './components/Leftside';
import Rightside from './components/Rightside';
import Center from './components/Center';


function App() {
  return (
    <>
    <div className="mainComponent">
 
      < Leftside />
      < Center />
      < Rightside />
    </div>
    <div className="responsive">Hii there, This is a dashboard and cannot be viewed on mobile devices. Please switch to a desktop to view this.</div> 
    </>
  )
}

export default App
