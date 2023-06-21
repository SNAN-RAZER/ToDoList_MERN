
import React from 'react'
import { Button } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
const Task = ({ data }) => {

  const idDisabledClass = `conatiner-text ${data?.completed?'strike':""}`; 
  return (
    <div className="conatiner">
       
      <div className={idDisabledClass}>
        {data.taskName}
      </div>

      <div className="container-buttons">
        <Button className='task-button'>
          <EditTwoTone className='task-icon'/>
        </Button>
        <Button className='task-button'>
        <DeleteTwoTone  className='task-icon'/>
        </Button>

        

      </div>

      </div>
      


  )
}

export default Task