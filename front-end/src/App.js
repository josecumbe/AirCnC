import './App.css';
import api from './services/api';
import { useState } from 'react';

//Importing the logo
import logo from './assets/logo.svg';

function App() {

  // Getting most recent email and setting it.
  const [email, setEmail] = useState('');

  async function handleSubmission(event) {
    // To prevent to be sent to new page
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    // Getting the user id
    const { _id } = response.data;

    // Storing in localStorage Browser to access Globally
    localStorage.setItem('user_id', _id);

    console.log(_id);
  }


  // Set email value to the most recent
  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  return (
    <div className="container">
       <img src={logo} alt="AirCnC" className="" />
       <div className="content">
         <p>
            Offer <strong>spots</strong> to developers and find <strong>talents</strong> for you company
         </p>

         <form onSubmit= {handleSubmission}>
           <label htmlFor="email">E-MAIL</label>
           <input 
            type="email" 
            id="email" 
            value={email}
            placeholder="Enter your e-mail"
            onChange= {handleEmailChange}
           /> 
           <button type="submit" className="btn">Login</button>

         </form>


       </div>
    </div>
  );
}

export default App;
