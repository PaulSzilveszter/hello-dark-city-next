import Background from "./reusables/Background"

import Gif from "../public/assets/link-page-background.gif"
import BlackOverlay from "../public/assets/black-overlay.png"

export default function LinkPage() {

  const pole = (
    <div style={{ backgroundColor: "black", width: "15px", height: "60%", top: "40%", position:"relative" }}></div>
  );


    return (<>
    <h1>Sal</h1>
    
    <Background isGif={true} Gif={Gif} isImage={true} Image={BlackOverlay} height={"100vh"} width={"100%"} position ="relative">
      {pole}
    </Background>
    
    </>)
  }