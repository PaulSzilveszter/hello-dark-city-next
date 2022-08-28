import Gif from "../../public/assets/ianua-background.gif"
import Image from "../../public/assets/black-overlay.png"

import Background from "../reusables/Background";

import styles from "../../styles/App/ConnectedPage.module.css"

export default function ConnectedPage(props) {

    const DisconnectWallet = (event) => {
        event.preventDefault();
        props.setConnection(false);
    }

    return (<>
        <Background isGif={true} Gif={Gif} isImage={true} Image ={Image} height={"100vh"} width={"100%"} position="relative">
            

            <form id={styles["disconnect-wallet-form"]} onSubmit={DisconnectWallet}>
                
                <button id={styles["disconnect-wallet-button"]} type="submit" value="Submit">DISCONNECT WALLET</button>

            </form>
        
        </Background>
    </>)
}