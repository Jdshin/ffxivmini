import { Button } from "react-bootstrap"

export default function FauxButton(props){
    return (
        <Button onClick={props.click} id={props.optionClass}>
            {props.optionStr}
        </Button>
    )
}