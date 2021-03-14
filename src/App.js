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

function App() {

const tasks = [
  {
    id: 1,
    name: 'Learn JS',
    status: 0
    
  },
  {
    id: 2,
    name: 'Learn React',
    status: 3
  },
  {
    id: 3,
    name: 'Finish Todo list',
    status: 2
  },
  {
    id: 4,
    name: 'Create LinkedIn profile',
    status: 0
  },
  {
    id: 5,
    name: 'Find a job',
    status: 5
  },
];


  const [list, setList] = useState(tasks);
  const todoList = list.filter(el => el.status === 2);
  const progressList = list.filter(el => el.status === 3);
  const reviewList = list.filter(el => el.status === 4);
  const doneList = list.filter(el => el.status === 5);
  
  
  const changeStatus = (id) => {
    const newList = list.map(el => el.id === id ? ({...el, markedForStatusChange: true}) : ({...el, markedForStatusChange: false}));
    setList(newList )
  }
  const leftButtonPushed = (id) => {
    const newList = list.map(el => el.id === id ? ({...el, markedFoDeletion: false}) : el);
    setList(newList );
    const updatedList= list.filter(el => el.id !== id);
    setList(updatedList);
  
  }
  const rightButtonPushed = () => {
  
  }
  
  
  
  
  return <div>
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
         <h2> My Tasks </h2>
          <hr/>
          <div>
            <ol>
              {  list.map(el =>
              <li key={el.id} ><h4> {el.name}</h4>
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
          <h2> todo ⇒ </h2>
          <hr/>
          <div>
            {
            todoList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
        <div className="col">
          <h2> progress ⇒ </h2>
          <hr/>
          <div>
            {
              progressList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
        <div className="col">
          <h2> review ⇒ </h2>
          <hr/>
          <div>
            {
              reviewList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
        <div className="col">
          <h2> done </h2>
          <hr/>
          <div>
            {
              doneList.map(el => <div key={el.id}>{el.name}</div>)
            }
          </div>
        </div>
      </div>
      </div>
      </div>
  
}
export default App;
