import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function Message(props) {
    let leftButton = props.currentStatus[props.status - 1].statusName;
    let rightButton =props.currentStatus[props.status +1].statusName;
    
   
    
        return (
            <div
                className="p-3 mb-2 bg-light text-dark">
                <h5  className="p-3 mb-2 bg-secondary text-white"> {props.name}:</h5>
                <center>
                <button type="button" className="btn btn-outline-secondary" onClick={() => props.leftButtonPushed(props.id) } > ⇦{leftButton}</button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => props.rightButtonPushed(props.id)} >{rightButton}⇨</button>
                </center>
            </div>
        
        );
    
}
export default Message;
