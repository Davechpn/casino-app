import {
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.scss';
import {
  AirlineSeatReclineExtraRounded,
  CategoryRounded,
  FavoriteRounded,
  HomeRounded,
  ViewCarousel,
} from '@mui/icons-material';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <div>
      <List>
        <MenuItem component={Link} to="/">
          <ListItemIcon>
            <HomeRounded style={{ color: 'red' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>

        <MenuItem component={Link} to="/favourites">
          <ListItemIcon>
            <FavoriteRounded style={{ color: 'red' }} />
          </ListItemIcon>
          <ListItemText primary="Favourites" />
        </MenuItem>
      </List>
      <Divider />

      <List>
        <MenuItem
          disableRipple
          disableTouchRipple
          sx={{
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
            },
          }}
        >
          <ListItemText primary="Game Categories" />
        </MenuItem>

        <MenuItem component={Link} to="categories/slots">
          <ListItemIcon>
            <AirlineSeatReclineExtraRounded style={{ color: 'red' }} />
          </ListItemIcon>
          <ListItemText primary="Slots" />
        </MenuItem>

        <MenuItem
          disableRipple
          disableTouchRipple
          sx={{
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
            },
          }}
        >
          <ListItemIcon>
            <CategoryRounded style={{ color: 'red' }} />
          </ListItemIcon>

          <ListItemText primary="Table Games" />
        </MenuItem>
        <MenuItem component={Link} to="categories/roulette">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Roulette" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ViewCarousel style={{ color: 'red' }} />
          </ListItemIcon>
          <ListItemText primary="Card Games" />
        </MenuItem>
        <MenuItem component={Link} to="categories/blackjack">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="BlackJack" />
        </MenuItem>
        <MenuItem component={Link} to="categories/poker">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Poker" />
        </MenuItem>
      </List>
    </div>
  );
}

export default Sidebar;
