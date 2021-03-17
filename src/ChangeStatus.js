import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function Message(props) {
    let leftButton = props.currentStatus[props.status - 1];
    let rightButton =props.currentStatus[props.status +1];
        
        return (
            <div>
                             
                <center className="p-3 mb-2 bg-light text-dark">
                    {
                        props.list
                            .filter(el=> el.status === props.status)
                            .map(el => <div key={el.id}>  <span> <h5 className="p-3 mb-2 bg-secondary text-white"> {el.name} </h5> </span>
                                <div>
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => props.leftButtonPushed(el.id) } > ⇦{leftButton}</button>
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => props.rightButtonPushed(el.id)} >{rightButton}⇨</button>
                                </div>
                            </div>)
                    }
                </center>
           
            </div>
        
        );
    
}
export default Message;
