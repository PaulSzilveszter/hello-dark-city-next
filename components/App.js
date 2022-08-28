import { useState } from "react";

import DisconnectedPage from "./App/DisconnectedPage";
import ConnectedPage from "./App/ConnectedPage";

import styles from "../styles/App.module.css"

export default function App(props){
    const [isConnected, setConnection] = useState(false);
    

    return (<>
    
    {isConnected ? (<ConnectedPage setConnection={setConnection}/>) : (<DisconnectedPage setConnection={setConnection}/>)}
    
    </>)
}