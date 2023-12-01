
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {useState} from 'react';

function App() {
  // Using useState here
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

 // checkBox function
 const checkBox = (id) => {
  const newItems = items.map((item) => 
   item.id == id ? {...item, checked: !item.checked} :item);
  setItems(newItems) // Items = newItems
};

// deleteItem function
const deleteItem = (id) => {
   const newItems = items.filter((item) => item.id != id);
   setItems(newItems); // Items = newItems
}
 
  return (
    <div className="App">
     <Header title = "Shopping List"/>
     <Main 
     items= {items}
     checkBox = {checkBox}
     deleteItem = {deleteItem}
     />
     <Footer number={items.length}/>
    </div>
  );
}

export default App;
