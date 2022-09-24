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
                        <rect x="5" y="175" width="374" height="802" stroke="#00FFA3" strokeWidth="10" />
                    </a>

                    <a id={styles["right-rectangle"]} xlinkHref="" target="_blank">
                        <rect x="1541" y="175" width="374" height="802" stroke="#00FFA3" strokeWidth="10" />
                    </a>


                    <a id={styles["left-triangle"]} xlinkHref="" target="_blank">
                        <path id="home-menu-path-of-sol" d="M389 977V179.639L1520.72 977H389Z" stroke="#00FFA3" strokeWidth="10" />
                    </a>

                    <a id={styles["right-triangle"]} xlinkHref="" target="_blank">
                        <path id="home-menu-ianua-ai" d="M1531.5 175V972.361L399.778 175H1531.5Z" stroke="#00FFA3" strokeWidth="10" />
                    </a>

                    
                </g>
            </svg>

        </>
    )
}