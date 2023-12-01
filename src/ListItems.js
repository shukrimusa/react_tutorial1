
import Item from './Item';
function ListItems({items, checkBox, deleteItem}) {
    return (
        <ul>
            {items.map((item) => (
             <Item 
             key = {item.id}
             item={item}
             checkBox={checkBox}
             deleteItem={deleteItem}/>
            ))}
         </ul>
    )
}


export default ListItems;