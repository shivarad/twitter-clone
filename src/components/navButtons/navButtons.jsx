import { Button } from "./navButtonsStyle"



const NavButton=({title,icon})=>{


    return(
        <Button>{icon}<span>{title}</span></Button>
    )
}

export default NavButton;