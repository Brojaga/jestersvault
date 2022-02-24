import * as React from 'react';
import './CharacterListHeader.css';

import Button from '@mui/material/Button';

import Character from './Character';
import CharacterListHeader from './CharacterListHeader';

import { createCharacter } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export default function CharacterList() {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);

  function handleCreateCharacter() {
    const createCharacterPromise = () => new Promise((resolve, reject) => {
      dispatch(createCharacter());
      resolve();
    })

    createCharacterPromise().then(() => {
      window.scroll({ top: document.body.offsetHeight, left: 0,  behavior: 'smooth' });
    })
  }

  return (
    <div>
      <CharacterListHeader />
      { characters.map((c) => ( <Character key={c.id} id={c.id} /> ))}
      <Button fullWidth sx={{m:0, p:0}} onClick={ () => {handleCreateCharacter()} }>
        <h3>ADD CHARACTER</h3>
      </Button>
    </div>
  )
}