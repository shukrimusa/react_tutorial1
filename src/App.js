
import Header from './Header';
import NewItem from './NewItem';
import SearchItem from './SearchItem';
import Main from './Main';
import Footer from './Footer';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {


  const API_URL = 'http://localhost:3500/items';

  // Using useStates Here
  const [loading, setLoading]  = useState(true)
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  // Stage 3 for Items using JSON server
  const [items, setItems] = useState([]);

  /*
  // Stage 2 for Items using localStorage
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  */
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
// Using useEffect Here
/*
// Use Effect to save items into local storage each time Items change.
useEffect(() => {
  console.log("Inside UseEffect")
  // Save Items in Local Storage
  localStorage.setItem('shoppinglist', JSON.stringify(items));
}, [items]);
*/

useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Error!");
      const listItems = await response.json();
      setItems(listItems);
      setError(null)
    } catch(err) {
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }
 
  //(async () => await fetchItems())();
  setTimeout(() => {
       fetchItems();
  }, 2000);
}, []);



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
     <main>
      <p style={{color: "red", textAlign: "center"}}>{error}</p>
      {loading &&<p style={{textAlign: "Center"}}>Loading...</p>}
      

     {!error && !loading && <Main 
     items= {items.filter((item) => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
     checkBox = {checkBox}
     deleteItem = {deleteItem}
     /> }
     </main> 
     <Footer number={items.length}/>
    </div>
  );
}

export default App;
