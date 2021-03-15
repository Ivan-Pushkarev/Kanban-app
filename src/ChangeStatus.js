import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function Message(props) {
    let leftButton = props.status >= 1 ? props.currentStatus[props.status - 1].statusName : null;
    let rightButton = props.status <= 4 ? props.currentStatus[props.status +1].statusName : null;
    
    if(props.markedForStatusChange)
    
        return (
            <div
                className="p-3 mb-2 bg-light text-dark">
                <h5  className="p-3 mb-2 bg-secondary text-white"> Move to:</h5>
                { props.status > 1 ?
                <button onClick={() => props.leftButtonPushed(props.id) } > ⇐{leftButton}</button> : null}
                { props.status < 5 ?
                <button onClick={() => props.rightButtonPushed(props.id)} >{rightButton}⇒</button> : null}
            </div>
        
        );
    else return null;
}
export default Message;
