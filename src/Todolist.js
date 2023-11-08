import React from 'react'
import './form.css'
const Todolist = ({todoItem, setTodoItem}) => {
  
  const deleteTodoItem =key=>{
    const newTodo = todoItem.filter((x)=>{
          return x.key !== key
      })
      setTodoItem (newTodo)
    }
  
  return (
    
       <>
            {todoItem.map((x)=>{
                    return (
              
                      <div class="Todolist">
                                <div className="todo row">
                                <div className="circle"></div>
                      <p>{x.list}</p>
                                </div>
                      
                        <i class="fa-solid fa-xmark hide"onClick={()=>deleteTodoItem(x.key)}></i>
                
                    </div>
                 
                    );
                     })
                }

                                </>




    
  )
}

export default Todolist