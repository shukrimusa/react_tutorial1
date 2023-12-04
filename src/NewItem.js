
import {FaPlus} from 'react-icons/fa';
import {useRef} from 'react';
function NewItem({newItem, setNewItem, submitItem}) {
    const inputRef = useRef()
    return(
        <form onSubmit={submitItem}>
               <label htmlFor = 'addNewItem'>Add Item: </label>
               <input
               id = 'addNewItem'
               type = 'text'
               ref = {inputRef} // Focus back on Input after clicking button
               // autoFocus
               // required
               value = {newItem}
               onChange = {(e) => {setNewItem(e.target.value)}}
               placeholder = "Add Item"
               />
               <button
               type = 'submit'
               onClick = {() => inputRef.current.focus()}> 
               <FaPlus/>
              </button>
                
        </form>
    )
}


export default NewItem;