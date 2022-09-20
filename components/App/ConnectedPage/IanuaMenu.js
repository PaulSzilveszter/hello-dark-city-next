import Image from "next/image"

import styles from "../../../styles/App/ConnectedPage/IanuaMenu.module.css"

import BlogButton from "../../../public/assets/blog-button-for-home-page.gif"
import EnterButton from "../../../public/assets/enter-button-for-home-page.gif"
import PathOfSol from "../../../public/assets/path-of-sol-button-for-home-page.gif"
import ShopButton from "../../../public/assets/shop-button-for-home-page.gif"


export default function IanuaMenu(props){
    return (
        <>
           <div style={{display:"flex", backgroundColor:"purple"}}>


           {/* <div style={{position:"relative", height:"min(100vh,100vw)", width:"min(25vh, 25vw)"}}> <Image src={BlogButton}  alt="" layout="fill"
    objectFit='cover' objectPosition="center"/></div>

        <div style={{position:"relative", height:"min(100vh,100vw)", width:"min(25vh, 25vw)"}}><Image src={PathOfSol}  alt="" 
    objectFit='cover' objectPosition="center"/></div>


    {/* <Image src={EnterButton}  alt="" 
    objectFit='cover' objectPosition="center"/>
    
    <Image src={ShopButton}  alt="" 
    objectFit='cover' objectPosition="center"/> */} 

            <div style={{height:"100vh", width:"25vw", backgroundColor:"black", boxSizing:"border-box", border:"solid red 3px"}}></div>


            <div id={styles["triangle1"]}></div>
            {/* <div id={styles["triangle2"]}></div> */}

            <div style={{height:"100vh", width:"25vw", backgroundColor:"black", boxSizing:"border-box", border:"solid red 3px"}}></div>


           </div>
        </>
    )
}