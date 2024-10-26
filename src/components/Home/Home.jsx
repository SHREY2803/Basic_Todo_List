import React, { useEffect, useState } from 'react'
import Task from '../Task/Task';

const Home = () => {
  const pendingTask = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) : [];

  const [tasks,setTasks] =useState(pendingTask);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const submitHandler =(e)=>{
    e.preventDefault();

    setTasks([...tasks,{
      title:title,
      description:description
    }]);

    setTitle("");
    setDescription("");

  }
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks]);

  const deleteTask = (index)=>{
    const newArr = tasks.filter((_,i)=>{
      return i!==index;
    })

    setTasks(newArr)
  }
  return (
    <div className='container'>
      <h1>Daliy Goals</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea name="" id="" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button type='submit'>Add</button>
        </form>
        {tasks.map((item,index)=>(
          <Task key={index} 
          title={item.title} 
          description={item.description}
          deleteTask={deleteTask}
          index={index}/>
        ))}   
    </div>
  )
}

export default Home;
