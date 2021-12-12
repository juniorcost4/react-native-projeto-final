import React, { createContext, useState, useContext, useEffect } from "react"
import Api from "../service/Api"

const CartContext = createContext()

export default function CartProvider({children}) {

    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState(0)
    const [qtd, setQtd] = useState(1)

    useEffect(() => {
        let value = 0
        cart.map((item) => {
            value = value + (item.vlUnitario * qtd)
        })

        setTotalValue(value)
    }, [cart])

    function add(item) {
        const newCart = cart;
        newCart.push(item)

        setCart([...newCart])
    }

    function remove(index) {
        let newCart = cart.filter((item, i) => i !== index)

        setCart([...newCart])
    }

    const store = {
        add,
        cart,
        qtd,
        setQtd,
        totalValue,
        remove
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    const {
        cart,
        add,
        qtd,
        setQtd,
        totalValue,
        remove
    } = context

    return { cart,
             add,
             qtd,
             setQtd,
             totalValue,
             remove }
}