import { Col, Row } from "react-bootstrap";
import FauxSquare from "../components/FauxSquare";

export default function createFauxGrid(gridSize, activeOption){
        let fauxGrid = [];
        for (let i = 0; i < gridSize; i++){
            let rowArr = [];
            for (let j = 0; j < gridSize; j++){
                rowArr.push(
                    <Col key={'r'+i+'c'+j}>
                        <FauxSquare id={'r'+i+'c'+j} activeOption={activeOption}/>
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