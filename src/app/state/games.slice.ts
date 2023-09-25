import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game, GAMES, GameStateType, SortValueType } from '../types/game';
import { arrayMove } from '@dnd-kit/sortable';

const initialState: GameStateType = {
  games: [],
  isLoading: false,
  errors: '',
};

export const gamesSlice = createSlice({
  name: GAMES,
  initialState,
  reducers: {
    getGamesAction: (state: GameStateType) => {
      state.isLoading = true;
      state.errors = '';
    },
    getGamesSuccessAction: (state: GameStateType,{ payload: games }: PayloadAction<Game[]>) => {
      state.isLoading = false;
      state.games = games;
    },
    getGamesErrorAction: (state: GameStateType,{ payload: error }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = error;
    },
    sortGamesAction: ( state: GameStateType,{ payload: sortvalue }: PayloadAction<SortValueType>) => {
      const games = state.games;
      const true_val  = sortvalue.order === "ASC"? 1 : -1
      const false_val = sortvalue.order === "ASC"? -1: 1

      switch (sortvalue.field) {
        case 'name':
          games.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? true_val : false_val);
          break;

        case 'rating':
          games.sort((a, b) =>a.rating > b.rating ? true_val : false_val);
          break;

        case 'active_users':
          games.sort((a, b) => a.active_users > b.active_users ? true_val : false_val);
          break;
        default:
          break;
      }

      state.games = games;
    },
    toggleFavourite: ( state: GameStateType,{ payload: id }: PayloadAction<number>) => {
      const game = state.games.find(g=>g.id === id);
      if(game)
       game.isFavourite = !game.isFavourite
    },
    dragSort:(state: GameStateType,{payload:event}:PayloadAction<any>)=>{
      const {active, over} = event;
  
      if (over && (active.id !== over.id)) {
          const games = state.games
          const oldIndex = games.findIndex(g=>g.id=== active.id);
          const newIndex = games.findIndex(g=>g.id=== over.id);

          state.games = arrayMove(games, oldIndex, newIndex);
      
        }
    }
    }
  })




export const {
  getGamesAction,
  getGamesSuccessAction,
  getGamesErrorAction,
  sortGamesAction,
  toggleFavourite,
  dragSort
} = gamesSlice.actions;

export const gamesReducer = gamesSlice.reducer;
