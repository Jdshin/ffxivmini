import {Container, Row, Col} from 'react-bootstrap';
import FauxSquare from '../components/FauxSquare';
import FauxButton from '../components/FauxButton';

export default function Faux(){

    let gridSize = 6;

    const createFauxGrid = () => {
        let fauxGrid = [];
        for (let i = 0; i < gridSize; i++){
            let rowArr = [];
            for (let j = 0; j < gridSize; j++){
                rowArr.push(
                    <Col key={'r'+i+'c'+j}>
                        <FauxSquare id={'r'+i+'c'+j} />
                    </Col>
                )
            }
            fauxGrid.push(
                <Row className="faux-row" key={'row-'+i}>
                    {rowArr}
                </Row>
            );
        }
        return fauxGrid;
    }

    let fauxGrid = createFauxGrid();

    const handleClick = (e)=>{
        console.log("Clicked!");
    }

    return (
        <Container className="faux-container">
            <Row>
                <Col className="faux-col" key="col-1">asdasdf</Col>
                <Col className="game-col">{fauxGrid}</Col>
                <Col className="faux-col option-select" key="col-3">
                    <FauxButton click={handleClick} option={"Blccked"}>Hello</FauxButton>
                </Col>
            </Row>

        </Container>
    )
}