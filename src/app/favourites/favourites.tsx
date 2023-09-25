import GameCard from '../shared-components/game-card/game-card';
import { Game, GameStateType } from '../types/game';
import styles from './favourites.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { dragSort } from '../state/games.slice';
import { useContext, useEffect } from 'react';
import { pageTitleContext } from '../layout/title.context';

export function Favourites() {
  const games: Game[] = useSelector((state: GameStateType) => state.games);
  const dispatch = useDispatch();
  const { setTitle } = useContext(pageTitleContext);

  useEffect(() => setTitle('Favorites'), []);

  return (
    <div className={styles['grid-container']}>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(event) => dispatch(dragSort(event))}
      >
        <SortableContext items={games} strategy={verticalListSortingStrategy}>
          {games
            .filter((g) => g.isFavourite)
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Favourites;
