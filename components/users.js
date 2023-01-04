import {useEffect, useReducer, createContext, useContext, useMemo } from "react";

useEffect(() => {
    if (JSON.parse(localStorage.getItem("username"))) { 
    
       //checking if there already is a state in localstorage
       //if yes, update the current state with the stored one
       dispatch({ 
          type: "init_stored", 
          value: JSON.parse(localStorage.getItem("username")),
       });
    }
 }, []);
 useEffect(() => {
    if (username !== initialState) {
       
       localStorage.setItem("username", JSON.stringify(username)); 
    
       //create and/or set a new localstorage variable called "state"
    }
 }, [username]);