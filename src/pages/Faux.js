import {Container, Row, Col} from 'react-bootstrap';
import FauxSquare from '../components/FauxSquare';
import FauxButton from '../components/FauxButton';
import createFauxGrid from '../utils/createFauxGrid';
import { useState } from 'react';

export default function Faux(){

    let gridSize = 6;


    const [activeOption, setActiveOption] = useState("");
    const [fauxButtonState, setFauxButtonState] = useState(false);

    const toggleOption = (e)=>{
        if (fauxButtonState === false){
            setActiveOption(e.target.id);
            setFauxButtonState(true);
        } else {
            setActiveOption("");
            setFauxButtonState(false);
        }   
    }

    let fauxGrid = createFauxGrid(gridSize, activeOption);

    return (
        <Container className="faux-container">
            <Row>
                <Col className="faux-col" key="col-1">asdasdf</Col>
                <Col className="game-col">{fauxGrid}</Col>
                <Col className="faux-col option-select" key="col-3">
                    <FauxButton click={toggleOption} optionStr={"Block"} state={fauxButtonState}/>
                </Col>
            </Row>

        </Container>
    )
}