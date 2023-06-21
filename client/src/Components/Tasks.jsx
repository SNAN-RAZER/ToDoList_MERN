import React from 'react'
import Task from './Task';
import { Button } from 'antd';

const Tasks = () => {

    const state =[{
        "_id": "6492e595351d1af0efa2feb2",
        "taskName": "Finish react",
        "completed": false,
        "createdAt": "2023-06-21T11:57:09.058Z",
        "updatedAt": "2023-06-21T11:57:09.058Z",
        "__v": 0,
    },
    {
        "_id": "6492e59b351d1af0efa2feb4",
        "taskName": "Finish Jest",
        "completed": false,
        "createdAt": "2023-06-21T11:57:15.442Z",
        "updatedAt": "2023-06-21T11:57:15.442Z",
        "__v": 0
    },
    {
        "_id": "6492e5a6351d1af0efa2feb6",
        "taskName": "Go to office",
        "completed": false,
        "createdAt": "2023-06-21T11:57:26.339Z",
        "updatedAt": "2023-06-21T11:57:26.339Z",
        "__v": 0
    }
];


  return (
    <>
     
      <Button className="add-button" type='primary'>
        
          Add Task
        
      </Button>
     
    < Task  data= {state[0]}/>
    </>
  )
}

export default Tasks