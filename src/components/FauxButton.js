import { Button } from "react-bootstrap"

export default function FauxButton(props){
    return (
        <Button onClick={props.click} id={props.optionStr} variant={props.state ? 'primary' : 'danger'}>
            {props.optionStr}
        </Button>
    )
}