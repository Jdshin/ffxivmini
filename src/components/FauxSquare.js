export default function FauxSquare(props){
    return (
        <div className="faux-square square" id={props.id}>
            {props.id}
        </div>
    )
}