import React from 'react'
import Task from '../Task/Task';

const Home = () => {
  return (
    <div className='container'>
      <h1>Daliy Goals</h1>
        <form action="">
            <input type="text" placeholder='Title' />
            <textarea name="" id="" placeholder='Description'></textarea>
            <button type='submit'>Add</button>
        </form>
        <Task />
      
    </div>
  )
}

export default Home;
