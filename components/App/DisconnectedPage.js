import Gif from "../../public/assets/ianua-background.gif"
import Image from "../../public/assets/black-overlay.png"

import Background from "../reusables/Background";
import Menu from "../reusables/Menu";

import styles from "../../styles/App/DisconnectedPage.module.css"

export default function DisconnectedPage(props) {

    const ConnectWallet = (event) => {
        event.preventDefault();
        props.setConnection(true);
    }

    return (<>
        <Menu/>

        <Background isGif={true} Gif={Gif} isImage={true} Image ={Image} height={"100vh"} width={"100%"} position="relative">
            

            <form id={styles["connect-wallet-form"]} onSubmit={ConnectWallet}>
                
                <button id={styles["connect-wallet-button"]} type="submit" value="Submit">CONNECT WALLET</button>

            </form>
        
        </Background>
    </>)
}