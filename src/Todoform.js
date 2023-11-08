import {useState} from 'react'
import './form.css'
import Todolist from './Todolist'


const Todoform = () => {
  const [theme, setTheme] = useState(false)
  const changeTheme =()=>{
    setTheme(!theme);
  }
    const [inputValue, setInputValue] = useState("")

    const [todoItem, setTodoItem] = useState([])

    const addTodoList =()=>{
        setTodoItem([
          ...todoItem,
           {checked:false},
           {list:inputValue, key:Date.now()}
        ])
    console.log("list items", )
      }

      const removeAllItems =() =>{
          setTodoItem([])
      }
    const handleForm =(e)=>{
        e.preventDefault();
        if (inputValue.trim() === "") return
        addTodoList(inputValue);
        setInputValue ('')
    }
  return (
    <>
         <section class="container">
        <div class="row header">
            <h3>Todo</h3>
            <div className={theme  ? "dark-theme" :" "}> 
                <i className={theme ?"fa-solid fa-sun":"fa-solid fa-moon" }onClick={changeTheme}></i>
            </div>
        </div>
        
        <div className="app">
            <form onSubmit={handleForm}>
                <div class="btn-space">
                    <i class="fa-sharp fa-solid fa-magnifying-glass"
                    onClick={addTodoList} ></i>
                <input type="text"placeholder ="Create A new Todo"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}/>
                </div>
            </form>

            
            <section class="gitAnswer">
            <Todolist todoItem={todoItem} setTodoItem ={setTodoItem}
/>
            
                 {todoItem.length > 0 ? (
                  <div className="label row">
                      <div className="no-of-items">
                   <p>{todoItem.length} items left</p>
                      </div>

                      <div className="action row">
                        <p>All</p>
                        <p>Active</p>
                        <p>Completed</p>
                      </div>

                      <div className="action row">
                      <p onClick={removeAllItems}> Clear</p>
                      <p>Completed</p>
                      </div>
                     </div>
                 ) :( <h3 style={{padding:"10px"}}>No List yet</h3>)}


                     
                            </section>
           
                            </div>
        </section>
    </>
  )
}

export default Todoform