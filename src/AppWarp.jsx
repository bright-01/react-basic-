import React  from 'react';
import Navbar from "./components/warp/Navbar";
import Avatar from "./components/basic/Avatar";
import Card from "./components/warp/Card";

export default function AppWarp(){
    return ( <div>
        <Navbar>
            <Avatar
                image='https://images.unsplash.com/photo-1682552954728-bebadc9b9030?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                name='bob'

            ></Avatar>
            <p>hi!</p>
        </Navbar>

        <Card>
            <h1>HI!!</h1>
        </Card>




    </div> )
}