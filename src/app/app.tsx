import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Home from './home/home';
import Categories from './categories/categories';
import Favourites from './favourites/favourites';
import Layout from './layout/layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGamesAction } from './state/games.slice';
import PageTitleProvider from './layout/title.context';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamesAction());
  }, [dispatch]);

  return (
    <PageTitleProvider>
      <div className={styles['layout-container']}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/categories/:id" element={<Categories />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
          </Routes>
        </Layout>
      </div>
    </PageTitleProvider>
  );
}

export default App;
