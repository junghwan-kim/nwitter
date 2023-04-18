import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth=()=>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange=(event)=>{
      const {target:{name, value}}=event;
      if(name === "email"){
        setEmail(value);
      } else if(name === "password"){
        setPassword(value);
      }

    };
    const onSubmit=async(e)=>{
      e.preventDefault();
      try{
        let data;       
        if(newAccount){
          //create account
          data = await authService.createUserWithEmailAndPassword(email, password);
        } else {
          //log in
          data = await authService.signInWithEmailAndPassword(email, password);
        }
        console.log(data);
      } catch(error) {
        setError(error.message);
      }
    };


    const toggleAccount = () =>{
      setNewAccount((prev) => !prev);
    };

    const onSocialClick=async(e)=>{
      const {target:{name, value}}=e;
      let provider;
      if(name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      }

      const data = await authService.signInWithPopup(provider);
      console.log(data);
    };
    return (
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Email" name="email" required value={email} onChange={onChange} />
            <input type="password" placeholder="Password" name="password" required={password} onChange={onChange} />
            <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            {error}
          </form>
          <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
          <div>
              <button onClick={onSocialClick} name="google">Continue with Google</button>
          </div>
        </div>
      );
};
export default Auth;