import React from "react";
import './App.css';
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";

function AppProfile() {
    const handleClick = (event)=> {
        console.log(event);
        alert("클릭이벤트");
    };

  return (
     <>
         <Counter></Counter>
         <Counter2></Counter2>

         <button onClick={handleClick}>클릭</button>
         <Profile image='https://images.unsplash.com/photo-1682552954728-bebadc9b9030?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  name ='james kim' title='프론트엔드 개발자' isNew = {true}
         />
         <Profile image='https://images.unsplash.com/photo-1682074905426-8b944309c1cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                  name ='finn' title='백엔드 개발자' isNew = {false}
         />
         <Profile image='https://images.unsplash.com/photo-1682547095197-5d83eafdb271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                  name ='jake' title='풀스택 개발자' isNew = {false}
         />

         <Avatar image='https://images.unsplash.com/photo-1682681019683-b3ea4a00013e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                 isNew={true}/>
     </>
  );
}

export default AppProfile;
