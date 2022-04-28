import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/pp.jpg'

const headerStyle = {
  backgroundColor: 'cyan',
  fontFamily:'Helvetic Neue',
  padding:25,
  lineHeight:1.5

}
const header = (
  <header style={headerStyle}>
    <h1>Welcome to react js</h1>
    <h2>second react session</h2>
    <p>First session of react </p>
   <small>Aprial 28 2022</small>
    
  </header>
);

// const jsxElement = <h1>This is first react app</h1>
// const rootElement = document.getElementById('root');

// ReactDOM.render(jsxElement,rootElement);

const main = (
  <main>
       <p>This is our first one </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>javascript</li>
      </ul>
  </main>
)

const footer = (

  <footer>
    <p>Copy right 2022</p>
  </footer>
  
);

const user = (

  <div>
    <img src = {userImage} alt= 'Chirag' />
  </div>

)

const app = (
  <div>
    {header}
    {main}
    {user}
    {footer}
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    app
);


