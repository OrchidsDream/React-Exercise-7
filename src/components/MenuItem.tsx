import { useContext } from "react"
import { isTemplateSpan } from "typescript"
import OrderContext from "../Context/OrderContext"
import Item from "../models/Item"

export default function MenuItem ({item}: {item : Item}) {
    const {order, addItem, removeItem}= useContext(OrderContext);
    return(
        <div>
            <li>
                <p>Name: {item.name}</p>
                <p>Desription: {item.description}</p>
                <p>Calories: {item.calories}</p>
                <p>Price: {item.price}</p>
                <p>{item.vegetarian === true?"Vegetarian" : "Not Vegetarian"}</p>
                <button onClick={() => {addItem(item)}}>Add To Order</button>
                {order.some(menuItem => menuItem.id === item.id) && <button onClick={() => removeItem(item.id)}>Remove from Order</button>}


            </li>
        </div>
    )
}