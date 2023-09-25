import styles from './categories.module.scss';
import GameCard from '../shared-components/game-card/game-card';
import { Game, GameStateType } from '../types/game';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { dragSort } from '../state/games.slice';
import { useContext, useEffect } from 'react';
import { pageTitleContext } from '../layout/title.context';

export function Categories() {
  const { id } = useParams();
  const games: Game[] = useSelector((state: GameStateType) => state.games);
  const dispatch = useDispatch();
  const { setTitle } = useContext(pageTitleContext);

  useEffect(() => setTitle(`Category ${id}`), [id]);

  return (
    <div className={styles['grid-container']}>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(event) => dispatch(dragSort(event))}
      >
        <SortableContext items={games} strategy={verticalListSortingStrategy}>
          {games
            .filter((g) => g.category === id)
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Categories;
