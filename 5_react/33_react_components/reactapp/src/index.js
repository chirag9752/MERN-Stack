import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/pp.jpg'


// syntax of functional component 
// const jsx = <tag>Content</tag>

// const ComponentName = () => {
//   return jsx 
// }

// why use compponent = component can replicate use for individual change {section banake  kar do ek jagah change karenge to har gajagh change ho jayega} 


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

// React component 

const Header = () => 
{
  return header
}

const UserCard = () => (
  <div>
    <img src = {userImage} alt= 'Chirag' />
  </div>

)



const Main = () => (
  <main>
       <p>This is our first para for the development of react app </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>javascript</li>
      </ul>
      <UserCard />
  </main>
)

const Footer = () => (

  <footer>
    <p>Copy right 2022</p>
  </footer>
  
);

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Header />
);


