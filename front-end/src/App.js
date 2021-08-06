import './App.css';

// Importing the routes 
import Routes from './routes';

//Importing the logo
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
       <img src={logo} alt="AirCnC" className="" />
       
       <div className="content">
         <Routes />
       </div>
    </div>
  );
}

export default App;
