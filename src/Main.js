
// Main Page
import ListItems from './ListItems';

function Main({items, checkBox, deleteItem}) {
    // Return (jsx)
    return(
        <main>

            {items.length ? 
            <ListItems
            items={items}
            checkBox={checkBox}
            deleteItem={deleteItem}
            /> : <h2 style={{margin: '2rem', textAlign: 'center'}}
         >List is empty!</h2>}
            
        </main>
    )
}


export default Main;