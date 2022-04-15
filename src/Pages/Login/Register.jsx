import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

   const navigate = useNavigate();

   const navigateLogin = ()=>{
      navigate('/login')
   }

   if(user){
     navigate('/home')
   }

   const handleRegister = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

      createUserWithEmailAndPassword(email, password);
  
   }
   return (
     <div className="register-form">
       <h2 style={{ textAlign: "center" }}>Please Register</h2>
       <form onSubmit={handleRegister}>
         <input type="text" name="name" placeholder="Your Name" />

         <input
           type="email"
           name="email"
           placeholder="Email Address"
           required
         />

         <input
           type="password"
           name="password"
           placeholder="Password"
           required
         />
         <input type="submit" value="Register" />
       </form>
       <p>
         Already have an account?{" "}
         <Link
           to="/login"
           className="text-danger pe-auto text-decoration-none"
           onClick={navigateLogin}
         >
           Please Login
         </Link>{" "}
       </p>
       <SocialLogin></SocialLogin>
     </div>
   );
};

export default Register;