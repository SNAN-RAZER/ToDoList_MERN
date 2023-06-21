import React, { useEffect, useState } from 'react'
import Task from './Task';
import { Button } from 'antd';
import TaskModal from './TaskModal';
import { getAllTasks } from '../api/apiCalls';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState([]);
    
 
   const getData = async()=>{
    try {
      const data =( await getAllTasks()).data;
      
       setState(data);
       navigate("/");
    console.log(state)
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
     
      <Button className="add-button" type='primary'

      onClick={()=>setIsModalOpen(true)}
      
      >
        
          Add Task
        
      </Button>
     {
        state.length>0?
        state.map(task=>( 
        < Task 
        setState ={setState}
           data= {task} 
           key={task._id}
           
           />)):(<h1>No tasks to show here</h1>)

     }
    <TaskModal 
    isModalOpen={isModalOpen}
    setIsModalOpen = {setIsModalOpen}
   
    data={state}
    />
    </>
  )
}

export default Tasks