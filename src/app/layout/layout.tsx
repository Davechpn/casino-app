import styles from './layout.module.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GameSort from '../shared-components/game-sort/game-sort';
import Sidebar from '../shared-components/sidebar/sidebar';
import { useContext, useState } from 'react';
import { pageTitleContext } from './title.context';

export interface LayoutProps {
  window?: () => Window;
  children: JSX.Element[] | JSX.Element;
}
const drawerWidth = 240;
export function Layout(props: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { title } = useContext(pageTitleContext);

  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="transparent"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles['page-header']}>
          <div className={styles['title-container']}>
            <Typography variant="h5" noWrap component="div"
              sx={{
                display: { xs: 'block', sm: 'none' }}}>
              {title}
            </Typography>
            <Typography variant="h4" noWrap component="div"
              sx={{
                display: { xs: 'none', sm: 'block' }}}>
              {title}
            </Typography>
            <GameSort />
          </div>

          </div>
        
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#000',
              color: 'white',
              opacity: 0.65,
            },
          }}
        >
          <Sidebar />
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#000',
              color: 'white',
              opacity: 0.65,
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 20,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default Layout;
