import Image from "next/image";

import Background from "./reusables/Background"
import LinkPageButton from "./LinkPage/LinkPageButton";

import styles from "../styles/LinkPage.module.css"

import Gif from "../public/assets/link-page-background.gif"

import Logo from "../public/assets/new-logo.png"


export default function LinkPage() {

  // style={{ height: "min(40vh, 40vw)", width: "min(40vh, 40vw)", opacity: "100%", top: "20%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute" }}

  // style={{ backgroundColor: "black", width: "15px", height: "60%", top: "40%", position:"absolute" }}


  const pole = (
    <div id={styles.pole}></div>
  );

  const sign = (<div id={styles["sign-wrapper"]}>
  {pole}
  <LinkPageButton  transition={"right"} text="ENTER SITE" link="./home" target="_blank"/>
  <LinkPageButton  transition={"left"} text="DISCORD" link="https://discord.gg/ABAvjWVkR5" target="_blank"/>
  <LinkPageButton transition={"right"} text="TWITTER" link="https://twitter.com/helloDARKCITY" target="_blank"/>
  <LinkPageButton  transition={"left"} text="WHITEPAPER" link="" target="_blank"/>
  <LinkPageButton  transition={"right"} text="ABOUT" link="" target="_blank"/>
  <LinkPageButton  transition={"left"} text="TIK TOK" link="" target="_blank"/>
  </div>)

  const logo = (
    <div id = {styles.logo}
    >
      
      <Image layout='fill'
    objectFit='cover' objectPosition="center" src={Logo}
         alt="" />


    </div>
  );

    return (<>
   
    
    <Background isGif={true} Gif={Gif}  height={"100vh"} width={"100%"} position ="relative">
      {sign}
      {logo}
    </Background>
    
    </>)
  }