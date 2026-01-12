import { createContext, useContext, useReducer, useMemo } from "react";


const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, name, price } = action.payload;
      const existing = state.items[id];
      const qty = existing ? existing.qty + 1 : 1;
      return { ...state, items: { ...state.items, [id]: { id, name, price, qty } } };
    }
    case "REMOVE_ONE": {
      const { id } = action.payload;
      const existing = state.items[id];
      if (!existing) return state;
      const qty = existing.qty - 1;
      const items = { ...state.items };
      if (qty <= 0) delete items[id]; else items[id] = { ...existing, qty };
      return { ...state, items };
    }
    case "DELETE": {
      const { id } = action.payload;
      const items = { ...state.items };
      delete items[id];
      return { ...state, items };
    }
    case "CLEAR":
      return { items: {} };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: {} });

  const value = useMemo(() => {
    const list = Object.values(state.items);
    const count = list.reduce((n, it) => n + it.qty, 0);
    const total = list.reduce((n, it) => n + it.qty * it.price, 0);
    return {
      items: list,
      count,
      total,
      add: (item) => dispatch({ type: "ADD", payload: item }),
      removeOne: (id) => dispatch({ type: "REMOVE_ONE", payload: { id } }),
      deleteItem: (id) => dispatch({ type: "DELETE", payload: { id } }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
