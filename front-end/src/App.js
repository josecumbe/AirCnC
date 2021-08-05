import './App.css';
import api from './services/api';

//Importing the logo
import logo from './assets/logo.svg';

function App() {

  function handleSubmission() {
    console.log('Hello World');
  }

  return (
    <div className="container">
       <img src={logo} alt="AirCnC" className="" />
       <div className="content">
         <p>
            Offer <strong>spots</strong> to developers and find <strong>talents</strong> for you company
         </p>

         <form onSubmit= {handleSubmission()}>
           <label htmlFor="email">E-MAIL</label>
           <input 
            type="email" 
            id="email" 
            placeholder="Enter your e-mail"
           /> 
           <button type="submit" className="btn">Login</button>

         </form>


       </div>
    </div>
  );
}

export default App;
