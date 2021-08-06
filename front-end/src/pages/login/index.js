import React, { useState }  from 'react';
import api from '../../services/api';

function Login({ history }) {
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

        history.push('/dashboard');

  }


  // Set email value to the most recent
  function handleEmailChange(event){
    setEmail(event.target.value);
  }

   return (
        <>
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
        </> 
    );
}

export default Login;