
import Header from './Header';
import NewItem from './NewItem';
import SearchItem from './SearchItem';
import Main from './Main';
import Footer from './Footer';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  // Using useStates Here
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  // Stage 2 for Items using localStorage
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);

  /*
  // stage 1 for Items using default Items
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        name: 'Milk'
    },
    {
        id: 2,
        checked: true,
        name: 'Apple'
    },
    {
        id: 3,
        checked: false,
        name: 'Orange'
    }
]);
*/
console.log("Before useEffect")
// Using useEffect Here
useEffect(() => {
  console.log("Inside UseEffect")
  // Save Items in Local Storage
  localStorage.setItem('shoppinglist', JSON.stringify(items));
}, [items]);

console.log("After useEffect")
 // checkBox function
 const checkBox = (id) => {
  const newItems = items.map((item) => 
  item.id == id ? {...item, checked: !item.checked} :item);
  setItems(newItems) // Items = newItems


  // Save newItems in Local Storage
  // localStorage.setItem('shoppinglist', JSON.stringify(newItems));
};

// deleteItem function
const deleteItem = (id) => {
   const newItems = items.filter((item) => item.id != id);
   setItems(newItems); // Items = newItems

   // Save newItems in Local Storage
   // localStorage.setItem('shoppinglist', JSON.stringify(newItems));  

}


// addItem function
const addItem = (name) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const newElement = {id, checked: false, name }
  const newItems = [...items, newElement];
  setItems(newItems)
  // Save newItems in Local Storage
  // localStorage.setItem('shoppinglist', JSON.stringify(newItems)); 
}


// submitItem function
const submitItem = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem);
    setNewItem('') 
}

 
  return (
    <div className="App">
     <Header title = "Shopping List"/>
     <NewItem
     newItem = {newItem}
     setNewItem = {setNewItem}
     submitItem = {submitItem}/>

     <SearchItem
     search = {search}
     setSearch = {setSearch}
     />
     <Main 
     items= {items.filter((item) => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
     checkBox = {checkBox}
     deleteItem = {deleteItem}
     />
     <Footer number={items.length}/>
    </div>
  );
}

export default App;
