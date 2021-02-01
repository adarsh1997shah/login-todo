import { useReducer } from 'react';
import { Alert } from 'rsuite';

const reducer = (prevItems, action) => {
  let data = [];

  switch (action.type) {
    case 'ADD':
      if (prevItems.some(item => item.title === action.data.title)) {
        Alert.error('Item with title already declared', 4000);
        data = prevItems;
      } else {
        data = [...prevItems, action.data];
      }
      break;
    case 'REMOVE':
      data = prevItems.filter(item => item.id !== action.id);
      break;
    case 'SAVE':
      data = prevItems.map(item => {
        if (item.id === action.data.id) {
          return action.data;
        } else {
          return item;
        }
      });
      break;
    default:
      Alert.error('Invalid operation', 4000);
  }

  return data;
};

export function useItemReducer() {
  const [items, dispatch] = useReducer(reducer, []);

  return [items, dispatch];
}
