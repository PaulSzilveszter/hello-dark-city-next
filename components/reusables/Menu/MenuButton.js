import styles from "../../../styles/reusables/Menu/MenuButton.module.css"

export default function MenuButton(props){
   
    return (
        <a  className = {styles["menu-button"]} href={props.link} target={props.target} rel="noreferrer">
            {props.text}
        </a>
    )
}