import { Button, Form, Input, Modal, Radio } from 'antd';
import React, { useState } from 'react'
import { addTask } from '../api/apiCalls';
import { useNavigate } from 'react-router-dom';

const TaskModal = ({
    isModalOpen, 
    setIsModalOpen,
    setState,
    data
}) => {
   const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
             const data = await addTask(values);
             console.log(data);
             navigate("/");
        } catch (error) {
            console.log(error)
        }
        console.log('Success:', values);
        setIsModalOpen(false);
        
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    
    
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        
        <Modal title="Add task"
         open={isModalOpen} 
          footer={false}
          onCancel={handleCancel}>
          <Form 
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete="off"
           
        
          >
        
            <Form.Item
            label="Task Name"
            name="taskName"
            
            >
            
            <Input type='text'
               
            />
            </Form.Item>

            

            <Form.Item >
                <Button
                type='primary'
                htmlType='submit'
                >
                    Save
                </Button>
            </Form.Item>

          </Form>
        </Modal>
      </>
  )
}

export default TaskModal