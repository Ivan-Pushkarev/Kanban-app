import { useState,} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ChangeStatus from "./ChangeStatus";

const currentStatus = [
  {
    statusId: 0,
    statusName: 'Pending',
  },
  {
    statusId: 1,
    statusName: 'Backlogs',
  },
  {
    statusId: 2,
    statusName: 'Todo',
  },
  {
    statusId: 3,
    statusName: 'Progress',
  },
  {
    statusId: 4,
    statusName: 'Review',
  },
  {
    statusId: 5,
    statusName: 'Done',
  },

 ];


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
  const backlogList = list.filter(el => el.status === 1);
  const todoList = list.filter(el => el.status === 2);
  const progressList = list.filter(el => el.status === 3);
  const reviewList = list.filter(el => el.status === 4);
  const doneList = list.filter(el => el.status === 5);
  
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
  
  const changeStatus = (id) => {
    const newList = list.map(el => el.id === id ? ({...el, markedForStatusChange: true}) : ({...el, markedForStatusChange: false}));
    setList(newList )
  }
  const leftButtonPushed = (id) => {
    console.log(id);
    const newList = list.map(el => el.id === id ? ({...el, status: (el.status - 1)}) : el);
    setList(newList );
   
  
  }
  const rightButtonPushed = (id) => {
    const newList = list.map(el => el.id === id ? ({...el, status: (el.status + 1)}) : el);
    setList(newList );
  
  
  }
  
  
  
  
  return <div>
    <h2><center className ="p-3 mb-2 bg-secondary text-white"> Kanban App</center></h2>
    <div className="container">
      <div className="row align-items-start">
        <div className="col" class="col-sm-3 bg-light p-3 border">
         <h4> My Tasks </h4>
          <input type="text" onChange={onChange} value={inputValue} />
          <button type="button" className="btn btn-secondary" onClick={addToList}>Add to list</button>
          <div>
            <ol>
              {  list.map(el =>
              <li key={el.id} ><h5> {el.name}</h5>
                <div>Status: {currentStatus[el.status].statusName} </div>
                 <div>
                    <button onClick={() => changeStatus(el.id)}>Change status</button>
                 </div>
                <ChangeStatus markedForStatusChange={el.markedForStatusChange} id={el.id} status={el.status} currentStatus={currentStatus}
                              leftButtonPushed={leftButtonPushed}  rightButtonPushed={rightButtonPushed} />
          </li>)}
            </ol>
        </div>
                 </div>
        <div className="col">
          <h3> todo ⇒ </h3>
          <hr/>
          <div>
            {
            todoList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
        <div className="col">
          <h3> progress ⇒ </h3>
          <hr/>
          <div>
            {
              progressList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
        <div className="col">
          <h3> review ⇒ </h3>
          <hr/>
          <div>
            {
              reviewList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
        <div className="col">
          <h3> done </h3>
          <hr/>
          <div>
            {
              doneList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
      </div>
      </div>
    <center><h3> backlogs :</h3>
      {
        backlogList.map(el => <div key={el.id}>{el.name}</div>)
      }
    </center>
      </div>
  
}
export default App;
