import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/LinkPage/LinkPageButton.module.css"

import SignButton1 from "../../public/assets/sign-post-1.png"
import SignButton2 from "../../public/assets/sign-post-2.png"

export default function LinkPageButton(props){
    
    
    
    return (
        <a className = {styles["link-page-button"]+" "+styles[props.transition]} href={props.link} target={props.target} rel="noreferrer">

            {/* <Image  src={props.Image} alt=""/> */}
            
            <div className={styles["link-page-button-text"]}>{props.text}</div>
        </a>
    )
}