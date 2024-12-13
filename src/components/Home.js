import React, {useState} from 'react';

import { FiTrash2, FiCheckCircle } from "react-icons/fi";



function Home() {

  //task state 
  const[tasks, setTasks]=useState([])

  //user input task
  const[inputTask ,  setInputTask] = useState('');

  //add new task
  const addNewtask = (title)=>{
    if(title!==""){
      
      //LAST ID

      const lastId = tasks.length ===0 ? 0 : tasks[tasks.length -1].id;
      const newTask ={id:lastId + 1,  title:title, completed:false};
      setTasks([...tasks, newTask]);
      setInputTask("");
    }
  }

  //remove a task
  const removetask = (id)=>{
    setTasks((prevTasks) => {
      return prevTasks.filter((task)=> task.id !== id);
    })
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold py-5" >Task Manager</h1>
      <p className='text-sm font-thin px-16'>Task manager is easy to use task manager app that helps you stay organized and productive.</p>
     
        <button onClick={() => {
          var element = document.body;
          element.classList.toggle('dark-mode');
        }} className='rounded-md p-2 m-5 bg-black text-white'>Dark mode</button>
 
      {/* add a section that user can add own task */}
      <section>
        <input 
          type='text' 
          placeholder='Add new task' 
          className='border-2 border-purple-400 p-2 m-2 w-60 rounded-md' 
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={() => addNewtask(inputTask)} className='bg-purple-500 text-white p-2 rounded-md'>Add Task +</button>
      </section>

      {/* show all tasks */}
      <section className='p-5 m-5 border-t-4'>
        {
          tasks &&
          tasks.map((task) => {
            return (
              <div
                key={task.id}
                className='flex flex-row items-center justify-center gap-4'
              >
                <h1 className={
                  task.completed ? 'bg-green-300 p-2 m-2 rounded-md line-through' : 'bg-purple-300 p-2 m-2 rounded-md'
                }>{task.completed ? task.title + " ( completed )" : task.title}</h1>
                
                <div onClick={() => removetask(task.id)} className='p-3 bg-red-500 rounded-md cursor-pointer text-white'>
                  <FiTrash2/>
                </div>
                <div 
                  onClick={() => {
                    setTasks(tasks.map((item) => {
                      if (item.id === task.id) {
                        return { ...item, completed: true }
                      }
                      return item;
                    }))
                  }} 
                  className="p-3 bg-green-500 rounded-md cursor-pointer text-white">
                  <FiCheckCircle/>
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Home
