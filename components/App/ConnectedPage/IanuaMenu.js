import Image from "next/image"

import styles from "../../../styles/App/ConnectedPage/IanuaMenu.module.css"

import BlogButton from "../../../public/assets/blog-button-for-home-page.gif"
import EnterButton from "../../../public/assets/enter-button-for-home-page.gif"
import PathOfSol from "../../../public/assets/path-of-sol-button-for-home-page.gif"
import ShopButton from "../../../public/assets/shop-button-for-home-page.gif"


export default function IanuaMenu(props) {
    return (
        <>

            

            <svg id={styles["menu-svg"]} width="100%" height="100vh" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

                <g id="menu">

                    {/* <a id={styles["middle-circle"]} xlinkHref="" target="_blank">
                        <circle id="home-menu-enter" cx="960" cy="576" r="195" stroke="#00FFA3" strokeWidth="10" />
                    </a> */}

                    <a id={styles["left-rectangle"]} xlinkHref="" target="_blank">
                        <rect x="5" y="175" width="374" height="802" stroke="transparent" strokeWidth="10" />
{/* 
                        <text fontSize="3rem" x="10%" y="50%" fill="white" dominantBaseline="middle" textAnchor="middle">SHOP</text> */}


                    </a>




                    <a id={styles["right-rectangle"]} xlinkHref="" target="_blank">
                        <rect x="1541" y="175" width="374" height="802" stroke="transparent" strokeWidth="10" />

                        {/* <text textLength="100px" fontSize="3rem" x="90%" y="50%" fill="white" dominantBaseline="middle" textAnchor="middle">BLOG</text> */}
                    </a>


                    <a id={styles["left-triangle"]} xlinkHref="" target="_blank">
                        <path id="home-menu-path-of-sol" d="M389 977V179.639L1520.72 977H389Z" stroke="transparent" strokeWidth="10" />

                        {/* <text fontSize="4rem" x="50%" y="80%" fill="white" dominantBaseline="middle" textAnchor="middle">PATH OF SOL</text> */}
                    </a>

                    <a id={styles["right-triangle"]} xlinkHref="" target="_blank">
                        <path id="home-menu-ianua-ai" d="M1531.5 175V972.361L399.778 175H1531.5Z" stroke="transparent" strokeWidth="10" />

                        {/* <text fontSize="4rem" x="50%" y="25%" fill="white" dominantBaseline="middle" textAnchor="middle">IANUA AI</text> */}
                    </a>


                </g>
            </svg>


            <a id={styles["middle-circle"]}  ><a id={styles["text-home"]} className={styles["button-text"]} >HOME</a></a>

            {/* <div id={styles["text-overlap"]} style={{ position: "absolute", top: "0%", left: "0%", height: "100%", width: "100%" }}> */}

                <a id={styles["text-shop"]} className={styles["button-text"]} >SHOP</a>

                <a id={styles["text-blog"]} className={styles["button-text"]} >BLOG</a>

                <a id={styles["text-ianua-ai"]} className={styles["button-text"]} >IANUA AI</a>

                <a id={styles["text-path-of-sol"]} className={styles["button-text"]} >PATH OF SOL</a>

                


            {/* </div> */}



        </>
    )
}