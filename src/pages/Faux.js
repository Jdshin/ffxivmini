import {Container, Row, Col} from 'react-bootstrap';
import FauxSquare from '../components/FauxSquare';

export default function Faux(){

    let gridSize = 6;

    const createFauxRow = () => {
        // For every row
        let fauxGrid = [];
        for (let i = 0; i < gridSize; i++){
            let rowArr = [];
            for (let j = 0; j < gridSize; j++){
                rowArr.push(
                    <FauxSquare id={'r'+i+'c'+j} key={'r'+i+'c'+j}/>
                )
            }
            fauxGrid.push(
                <Row className="faux-row">
                    {rowArr}
                </Row>
            );
        }
        return fauxGrid;
    }

    let fauxGrid = createFauxRow();

    return (
        <Container className="faux-container">
            {fauxGrid}
        </Container>
    )
}