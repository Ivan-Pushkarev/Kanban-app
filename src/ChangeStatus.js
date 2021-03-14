import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function Message(props) {
    let leftButton = props.status !== 0 ? props.currentStatus[props.status - 1].statusName : null;
    let rightButton = props.status !== 5 ?props.currentStatus[props.status +1].statusName : null;
    console.log(leftButton);
    //let status = props.status.statusName;
    // switch(status){
    //     case null: {
    //         leftButton = null;
    //         rightButton = 'Backlogs';
    //         break;
    //     }
    //     case 'Backlogs': {
    //         leftButton = null;
    //         rightButton = 'Todo';
    //         break;
    //     }
    //     case 'Todo': {
    //         leftButton = 'Backlogs';
    //         rightButton = 'Progress';
    //         break;
    //     }
    //     case 'Progress': {
    //         leftButton = 'TODO';
    //         rightButton = 'Review';
    //         break;
    //     }
    //     case 'Review': {
    //         leftButton = 'Progress';
    //         rightButton = 'Review';
    //         break;
    //     }
    //     case 'Done': {
    //         leftButton = 'Review';
    //         rightButton = null;
    //         break;
    //     }
    // }
    if(props.markedForStatusChange)
    
        return (
            <div
                className="p-3 mb-2 bg-light text-dark">
                <h5  className="p-3 mb-2 bg-secondary text-white"> Move to:</h5>
                { props.status > 0 ?
                <button onClick={() => props.leftButtonPushed(props.id) } > ⇐{leftButton}</button> : <div></div>}
                { props.status < 6 ?
                <button onClick={() => props.rightButtonPushed(props.id)} >{rightButton}⇒</button> : <div></div>}
            </div>
        
        );
    else return null;
}
export default Message;
