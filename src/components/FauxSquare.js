import { useState } from "react";

export default function FauxSquare(props){

    const [active, setActive] = useState(false);
    const [newClass, setNewClass] = useState("");

    const toggleSquare = (e)=>{
        console.log(e.target.id);
        if (active){
            setActive(false);
            setNewClass("");
        } else {
            setActive(true);
            setNewClass(props.activeOption);
        }
    }

    return (
        <div className={active ? newClass + " faux-square square" : "faux-square square"} id={props.id} onClick={toggleSquare}>
            {props.id}
        </div>
    )
}