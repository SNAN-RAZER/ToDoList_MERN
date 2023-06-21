
import React from 'react'
import { Button } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import TaskModal from './TaskModal';
import { deleteTask } from '../api/apiCalls';
import { useNavigate } from 'react-router-dom';

const Task = ({
 
  data,
  
  }) => {
   const navigate = useNavigate();
  const deleteCurrentTask = async (task)=>{
    try {
      const data =await deleteTask(task);
      console.log(data)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    

  }
  const idDisabledClass = `conatiner-text ${data?.completed?'strike':""}`; 
  return (
    <>
    <div className="conatiner">
       
      <div className={idDisabledClass}>
        {data.taskName}
      </div>

      <div className="container-buttons">
        
        <Button className='task-button'>
        <DeleteTwoTone  className='task-icon'
        onClick={()=>deleteCurrentTask(data)}
        />
        </Button>

        

      </div>

      </div>
    
      </>

  )
}

export default Task