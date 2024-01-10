import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // console.log(action.size);
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        // console.log(food, action.size);
        if (food.id === action.id && food.size === action.size) {
          // console.log(
          //   food.qty,
          //   food.size,
          //   parseInt(action.qty),
          //   action.price + food.price
          // );
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + parseInt(food.qty),
            // size: food.size,
            price: action.price + food.price,
          };
        }
      });
      return arr;
    case "DROP":
      let emptyArray = [];
      return emptyArray;
    default:
      console.log("error in reducer");
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);
