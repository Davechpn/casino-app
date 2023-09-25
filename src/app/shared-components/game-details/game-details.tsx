import styles from './game-details.module.scss';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Game } from '../../types/game';
import { CardMedia, Rating } from '@mui/material';

export interface GameDetailsProps {
  game: Game;
}

export function GameDetails(props: GameDetailsProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const game = props.game;

  return (
    <div>
      <Button onMouseDown={handleOpen}>View Details</Button>
      <Modal
        aria-labelledby="game more details"
        aria-describedby={game.content}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CardMedia sx={{ height: 200 }} image={game.image} />
            <Typography variant="h5" component="div">
              {game.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {game.category}
            </Typography>

            <Typography id="modal-description" sx={{ mt: 2 }}>
              {game.content}
            </Typography>

            <Typography
              sx={{ fontSize: 14, mt: 2 }}
              color="text.secondary"
              gutterBottom
            >
              {game.active_users} Active Users
            </Typography>
            <Rating name="Rating" value={game.rating} readOnly />

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row-reverse',
              }}
            >
              <Button onMouseDown={handleClose}>Close</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default GameDetails;

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};
