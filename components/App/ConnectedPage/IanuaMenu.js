import Image from "next/image"

import styles from "../../../styles/App/ConnectedPage/IanuaMenu.module.css"

import BlogButton from "../../../public/assets/blog-button-for-home-page.gif"
import EnterButton from "../../../public/assets/enter-button-for-home-page.gif"
import PathOfSol from "../../../public/assets/path-of-sol-button-for-home-page.gif"
import ShopButton from "../../../public/assets/shop-button-for-home-page.gif"


export default function IanuaMenu(props){
    return (
        <>
           <div id={styles["ianua-menu"]} >


           {/* <div style={{position:"relative", height:"min(100vh,100vw)", width:"min(25vh, 25vw)"}}> <Image src={BlogButton}  alt="" layout="fill"
    objectFit='cover' objectPosition="center"/></div>

        <div style={{position:"relative", height:"min(100vh,100vw)", width:"min(25vh, 25vw)"}}><Image src={PathOfSol}  alt="" 
    objectFit='cover' objectPosition="center"/></div>


    {/* <Image src={EnterButton}  alt="" 
    objectFit='cover' objectPosition="center"/>
    
    <Image src={ShopButton}  alt="" 
    objectFit='cover' objectPosition="center"/> */} 

            <div id = {styles["rectangle"]}>

                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>

            <div id = {styles["rectangle"]}>

                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>


            <div id={styles["triangle1"]}>
            <span></span>
                <span></span>
                <span></span>
                <span></span>


            </div>
            {/* <div id={styles["triangle2"]}></div> */}

           


           </div>
        </>
    )
}