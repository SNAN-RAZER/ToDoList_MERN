import taskAxiosInstance from ".";

export const getAllTasks = async ()=>{
    try {
        const response = await taskAxiosInstance.get('/get-tasks');
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const addTask = async (values)=>{
    try {
        const response = await taskAxiosInstance.post('/add-task',values);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const deleteTask = async (values)=>{
    try {
        console.log(values)
        const response = await taskAxiosInstance.post('/delete-task',
        values
        
        );
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
};