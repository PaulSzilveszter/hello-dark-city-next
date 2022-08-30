/*
This Components Builds the whole menu
*/
import { useState } from "react"
import Image from "next/image.js";

import MenuButton from "./Menu/MenuButton";
// import URL from "../scripts/URL.js";

import styles from "../../styles/reusables/Menu.module.css"

import MenuButtonImg from "../../public/assets/menu-button.png"


//Gets the main page url:
// const domain = URL.getDomain();

export default function Menu() {

    //This hook if the menu is opened or not

    const [isOpen, toggleMenu] = useState(false);

    //Menu Closed Parts:

    const menuClosed = (
        <button id={styles["menu-closed"]} onClick={() => {
            toggleMenu(!isOpen);
        }}>
            <div id ={styles["menu-closed-image"]}>
            <Image src={MenuButtonImg} alt="" layout='fill'
    objectFit='cover' objectPosition="center"/>
            </div>
        </button>
    )

    

    //Menu Opened Parts:

    const menuUpper = (
        <div id={styles["menu-upper"]}>
            
            <div id={styles["menu-upper-company-name"]}>DARK CITY</div>
            
            <div id={styles["menu-user-greeting"]}>Hello, User!</div>
            
            <button id={styles["menu-close-button"]} onClick={() => {
                toggleMenu(!isOpen);
            }}>
                X
            </button>
        </div>
    )


            //Menu Lower:



    const horizontalLine = (<div className={styles["menu-horizontal-line"]}></div>)

        //Open the menu to see what this is:

    function category(categoryName) {
        return <div className={styles["menu-category"]}>{categoryName}</div>
    }

    // const div = (<div style={{height:"10%", width:"10px", backgroundColor:"blue"}}></div>)

    const menuLower = (<div id = {styles["menu-lower"]}>

{horizontalLine}
        {category("SOCIAL MEDIA")}
        <MenuButton/>
        <MenuButton/>
        <MenuButton/>
        <MenuButton/>
        {/* {div}
        {div}
        {div} */}

        {horizontalLine}
        {category("ARE YOU LOST?")}

        <MenuButton/>
        <MenuButton/>
        <MenuButton/>
        <MenuButton/>
    </div>)

        //The menu opened:
        
    

    const menuOpened = (<div id={styles["menu-opened"]}>
        {menuUpper}
        
        {menuLower}

        
    </div>)


    //Rendering:
    return (
        isOpen ? menuOpened : menuClosed

    )
}