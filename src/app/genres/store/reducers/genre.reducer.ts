import { GenreActionTypes, GenreAction } from '../actions/genre.actions';
import { GenreItem } from '../models/genre-item.model';

export interface GenreState {
  list: GenreItem[],
  loading: boolean,
  error: Error;
}


const initialState: GenreState = {
  list: [],
  loading: false,
  error: undefined as any
};

export function GenreReducer(state: GenreState = initialState, action: GenreAction | any) {
  switch (action.type) {
    case GenreActionTypes.LOAD_GENRE:
      return {
        ...state,
        loading: true
      }
    case GenreActionTypes.LOAD_GENRE_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case GenreActionTypes.LOAD_GENRE_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case GenreActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case GenreActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case GenreActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case GenreActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case GenreActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      }
    case GenreActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };


    case GenreActionTypes.CHANGE_ITEM:
      return {
        ...state,
        loading: true
      }
    case GenreActionTypes.CHANGE_ITEM_SUCCESS:
      const newList = state.list.map(el => {
        return action.payload.id === el.id ? action.payload : el;
      })
      return {
        ...state,
        list: newList,
        loading: false
      };
    case GenreActionTypes.CHANGE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
