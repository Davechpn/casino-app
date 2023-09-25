import styles from './game-sort.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortGamesAction } from 'src/app/state/games.slice';


export function GameSort() {
  const [field, setField] = useState<string>("")
  const [order, setOrder] = useState<string>("")
  const dispatch = useDispatch();

  useEffect(()=>{
    if(field && order){
      console.log('run filters')
      dispatch(sortGamesAction({field,order}))
    }
  },[dispatch, field, order])


  return (
    <div className={styles['sort-container']}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel htmlFor="select">Sort by:</InputLabel>
        <Select defaultValue="" id="select" label="Sort by"  onChange={(event)=>setField(event.target.value)}>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="active_users">Active user</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel htmlFor="order-select">Order</InputLabel>
        <Select defaultValue="" id="order-select" label="order" onChange={(event)=>setOrder(event.target.value)}>
          <MenuItem value="ASC">{field === 'name'? 'A-Z':'Lowest first'}</MenuItem>
          <MenuItem value="DESC">{field === 'name'? 'Z-A':'Highest first'}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );

}

export default GameSort;
