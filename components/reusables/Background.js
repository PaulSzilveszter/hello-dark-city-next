/*
    Represents a customisable background
*/

import Image from "next/image"


import BackgorundStylesheet from "../../styles/reusables/Background.module.css"




export default function Background(props) {

    const backgroundStyle = { position: props.position, height: props.height, width: props.width, ...props.style }

    const gif = <Image src={props.Gif}  alt="" layout='fill'
    objectFit='cover' objectPosition="center"/>

    const image = <Image src={props.Image}  alt="" layout='fill'
    objectFit='cover' objectPosition="center"/>

    return (
        <>
            <div className="background" style={backgroundStyle} >



                {props.isGif && gif}
                {props.isImage && image}
                

                {props.children}


            </div>
        </>);
}