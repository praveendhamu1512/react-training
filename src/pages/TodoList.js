import './TodoList.css';

import {useState} from 'react';


const Addtask = ({addTask}) => {

    const[value,upDateValue]=useState("");

    const handleSumbit = e => {

        e.preventDefault();
        if(!value === '') {

            addTask(value);

            upDateValue("")
        }
    }
    return (
        <form onSubmit={handleSumbit}>
            <input type="text"
            value={value}
            placeholder="Enter your Task"
            onChange={(e) =>upDateValue(e.target.value)}
        />
        <button>Add Task</button>
        </form>
    );
    
}




const ToDoList = () => {
    
    const addTask = text =>upDateTask([...tasks,{text}])

    const[tasks,upDateTask]=useState([
        {
            text:'Wake Up',
            isCompleted:false
        },

        {
            text:'Fresh Up',
            isCompleted:false
        },

        {
            text:'Boots Up',
            isCompleted:false
        }
        
    ]);

    const toggleTask = index => {

        const newTask = [...tasks];

        if(newTask[index].isCompleted){

            newTask[index].isCompleted=false;
        }
        else {
            newTask[index].isCompleted=true;
        }
        upDateTask(newTask);
    }

    const removeTask = index => {

        const newTask =[...tasks];
        newTask.splice(index,1);
        upDateTask(newTask);
    }
    return(
        <div className='list-of-task'>
            {tasks.map((task,index)=>(

                <div className='task-status'>
                    
                    <span onClick={()=>toggleTask(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
                    {index}
                    {task.text}                    
                    </span>
                    <button onClick={()=>removeTask(index)}>
                         Delete
                    </button>
                </div>
            ))}
            <Addtask addTask={addTask} />
    
        </div>
    )
}





export default ToDoList;