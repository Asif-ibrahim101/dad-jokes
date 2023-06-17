import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import fetchFormApi from '../Utils/fetchFormApi';

function Card() {

  const [jokes, getJokes] = useState([]);

  const GetAJoke = () => {
    fetchFormApi().then((data) => { getJokes(data) });
  }

  useEffect(() => {
    GetAJoke();
  }, []);

  console.log(jokes);
  return (
    <>
      <Box className="card" bgcolor='#fff' p={5} textAlign='center' width={650} height='auto' borderRadius={2}>
        <p style={{ color: 'gray', fontWeight: 700, fontSize: '1.1rem', padding: '1rem' }}>
          Don't laugh challange
        </p>

        {
          jokes.map((jokes, i) => (
            <Typography key={i} style={{ color: 'gray', fontWeight: 700, fontSize: '1.1rem', padding: '1rem' }}>
              {jokes.joke}
            </Typography>
          ))
        }

        <br />

        <Button variant='contained' bgColor='#11009E' onClick={() => GetAJoke()} size='large'>Get A New Joke</Button>
      </Box>
    </>
  )
}

export default Card;
