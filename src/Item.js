
import {FaTrashAlt} from 'react-icons/fa';


function Item({item, checkBox, deleteItem}) {
    return (
             <li>
                 <input
                 type= "checkbox"
                 checked = {item.checked}
                 onChange = {() => checkBox(item.id)}
                 />
                 <label>{item.name}</label>
                 <FaTrashAlt 
                 //role='button' 
                 //tabIndex='0'
                 onClick = {() => deleteItem(item.id)}
                 />
             </li>
    )
}

export default Item;

