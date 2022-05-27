import { useContext } from 'react'
import   '../components/Header.css'
import OrderContext from '../Context/OrderContext'
export default function Header () {
    const {order} = useContext(OrderContext);
    return(
        <header className="Header">
            <h1> Sunny Side Up</h1>
            <p>Order Count: {order.length} </p>
        </header>
    )
}