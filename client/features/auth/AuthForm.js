import React, { useState } from 'react';
import Login from './Login';
import SignUpForm from './SignUpForm';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = () => {
  const [form, setForm] = useState(true)


  return (
    <div>
      {form ? (
        <Login name="login" displayName="Login" setForm={setForm} />
      ) : (
        <SignUpForm name="signup" displayName="Sign Up" setForm={setForm} />
      )}
    </div>
  );
};

export default AuthForm;
