import { BookActionTypes, BookAction } from '../actions/book.actions';
import { BookItem } from '../models/book-item.model';

export interface BookState {
  list: BookItem[],
  loading: boolean,
  error: Error;
}


const initialState: BookState = {
  list: [],
  loading: false,
  error: undefined as any
};

export function BookReducer(state: BookState = initialState, action: BookAction | any) {
  switch (action.type) {
    case BookActionTypes.LOAD_BOOK:
      return {
        ...state,
        loading: true
      }
    case BookActionTypes.LOAD_BOOK_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case BookActionTypes.LOAD_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case BookActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case BookActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case BookActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case BookActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case BookActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      }
    case BookActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };


    case BookActionTypes.CHANGE_ITEM:
      return {
        ...state,
        loading: true
      }
    case BookActionTypes.CHANGE_ITEM_SUCCESS:
      const newList = state.list.map(el => {
        return action.payload.id === el.id ? action.payload : el;
      })
      return {
        ...state,
        list: newList,
        loading: false
      };
    case BookActionTypes.CHANGE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
