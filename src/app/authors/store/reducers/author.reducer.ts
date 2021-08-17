import { AuthorActionTypes, AuthorAction } from '../actions/author.actions';
import { AuthorItem } from '../models/author-item.model';

export interface AuthorState {
  list: AuthorItem[],
  loading: boolean,
  error: Error;
}


const initialState: AuthorState = {
  list: [],
  loading: false,
  error: undefined as any
};

export function AuthorReducer(state: AuthorState = initialState, action: AuthorAction | any) {
  switch (action.type) {
    case AuthorActionTypes.LOAD_AUTHOR:
      return {
        ...state,
        loading: true
      }
    case AuthorActionTypes.LOAD_AUTHOR_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case AuthorActionTypes.LOAD_AUTHOR_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case AuthorActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case AuthorActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case AuthorActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case AuthorActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case AuthorActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      }
    case AuthorActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };


    case AuthorActionTypes.CHANGE_ITEM:
      return {
        ...state,
        loading: true
      }
    case AuthorActionTypes.CHANGE_ITEM_SUCCESS:
      const newList = state.list.map(el => {
        return action.payload.id === el.id ? action.payload : el;
      })
      return {
        ...state,
        list: newList,
        loading: false
      };
    case AuthorActionTypes.CHANGE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
