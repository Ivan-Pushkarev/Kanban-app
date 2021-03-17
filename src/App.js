import { useState,} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ChangeStatus from "./ChangeStatus";

const currentStatus = ['Backlogs','Todo','Progress','Review','Done'];
const tasks = [
  {
    id: 1,
    name: 'Learn JS',
    status: 0
    
  },
  {
    id: 2,
    name: 'Learn React',
    status: 0
  },
  {
    id: 3,
    name: 'Finish Todo list',
    status: 0
  },
  {
    id: 4,
    name: 'Create LinkedIn profile',
    status: 0
  },
  {
    id: 5,
    name: 'Find a job',
    status: 0
  },
];

function App() {

  const [list, setList] = useState(tasks);
  const [inputValue, setInputValue] = useState('Add task');
  const onChange = e => {
   
    setInputValue(e.target.value);
  };
  const addToList = () => {
    setList([...list,
      {
        id: Math.random(),
        name: inputValue,
        status: 0,
      }]);
    setInputValue('')
  };
  
  const leftButtonPushed = (id) => {
    const newList = list.map(el => el.id === id ? ({...el, status: (el.status - 1)}) : el);
    setList(newList );
  }
  const rightButtonPushed = (id) => {
    const newList = list.map(el => el.id === id ? ({...el, status: (el.status + 1)}) : el);
    setList(newList );
  }
  
  return <div>
    <h2><center className ="p-3 mb-2 bg-secondary text-white"> Kanban App</center></h2>
    <center>
      <input type="text" onChange={onChange} value={inputValue} />
      <button type="button" className="btn btn-outline-secondary" onClick={addToList}>Add</button>
    </center>
    <div className="container">
      <div className="row justify-content-around">
      
        <div className="col">
          <h3> todo ⇒ </h3>
          <hr/>
          <div>
            
              <ChangeStatus list={list} status={1} currentStatus={currentStatus}
                            leftButtonPushed={leftButtonPushed}  rightButtonPushed={rightButtonPushed}/>
            
          </div>
        </div>
        <div className="col">
          <h3> progress ⇒ </h3>
          <hr/>
            <div>
              <ChangeStatus list={list} status={2} currentStatus={currentStatus}
                            leftButtonPushed={leftButtonPushed}  rightButtonPushed={rightButtonPushed}/>

            </div>
        </div>
        <div className="col">
          <h3> review ⇒ </h3>
          <hr/>
          <div>
            <ChangeStatus list={list} status={3} currentStatus={currentStatus}
                          leftButtonPushed={leftButtonPushed}  rightButtonPushed={rightButtonPushed}/>

          </div>
        </div>
        <div className="col">
          <h3> done </h3>
          <hr/>
          <div>
            {
              list.filter(el => el.status === 4)
                  .map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
      </div>
      </div>
    <center><h3>backlogs: </h3>
      <div>
        {
          list.filter(el => el.status === 0)
              .map(el => <button type="button" className="btn btn-outline-secondary" key={el.id} onClick={()=> rightButtonPushed(el.id)}>{el.name}</button>)
        }
      </div>
    </center>
      </div>
  
}
export default App;
