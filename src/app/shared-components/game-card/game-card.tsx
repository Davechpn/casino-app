import { Game } from '../../types/game';
import styles from './game-card.module.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, IconButton, Rating } from '@mui/material';
import GameDetails from '../game-details/game-details';
import { useDispatch } from 'react-redux';
import { toggleFavourite } from 'src/app/state/games.slice';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export interface GamesCardProps {
  game: Game;
}

export function GameCard(props: GamesCardProps) {
  const dispatch = useDispatch();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.game.id });

  const game = props.game;

  const dndstyles = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.9 : 1,
    zIndex: isDragging ? 5000 : 0,
  };

  return (
    <div
      className={styles['hvr-grow']}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={dndstyles}
    >
      <Card sx={{ minWidth: 296 }} elevation={2}>
        <CardContent>
          <CardMedia
            sx={{ height: 180, borderRadius: 1, mb: 1 }}
            image={game.image}
          />
          <Typography variant="h6" component="div">
            {game.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {game.category}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {game.active_users} Active Users
          </Typography>
          <Rating name="Rating" value={game.rating} readOnly />
        </CardContent>

        <CardActions>
          <IconButton onMouseDown={() => dispatch(toggleFavourite(game.id))}>
            {game.isFavourite ? (
              <FavoriteOutlined style={{ color: 'red' }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </IconButton>
          <GameDetails game={game} />
        </CardActions>
      </Card>
    </div>
  );
}

export default GameCard;
