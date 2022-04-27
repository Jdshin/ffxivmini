import { Button } from "react-bootstrap"

export default function FauxButton(props){
    return (
        <Button onClick={props.click}>
            {props.option}
        </Button>
    )
}