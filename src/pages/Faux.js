import {Container, Row, Col} from 'react-bootstrap';
import FauxSquare from '../components/FauxSquare';

export default function Faux(){

    let gridSize = 6;

    const createFauxGrid = () => {
        let fauxGrid = [];
        for (let i = 0; i < gridSize; i++){
            let rowArr = [];
            for (let j = 0; j < gridSize; j++){
                rowArr.push(
                    <FauxSquare id={'r'+i+'c'+j} key={'r'+i+'c'+j}/>
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

    return (
        <Container className="faux-container">
            <Row className="faux-row-container">
                <Col className="faux-col" key="col-1">asdasdf</Col>
                <Col key="col-2">{fauxGrid}</Col>
                <Col className="faux-col" key="col-3">asdfasdf</Col>
            </Row>
        </Container>
    )
}