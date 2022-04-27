import { useState } from "react";

export default function FauxSquare(props){

    const [active, setActive] = useState(false);

    const toggleSquare = (e)=>{
        console.log(e.target.id);
        if (active){
            setActive(false);
        } else {
            setActive(true);
        }
    }

    return (
        <div className={active ? props.activeOption + " faux-square square" : "faux-square square"} id={props.id} onClick={toggleSquare}>
            {props.id}
        </div>
    )
}