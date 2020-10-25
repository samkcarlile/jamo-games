import React, { useState, useEffect } from 'react';
import { render, Text, useInput, Box, Newline } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';

const Board = () => {
  const [board, setBoard] = useState([
    ['X', 'O', 'O'],
    ['-', 'X', '-'],
    ['-', '-', 'X'],
  ]);

  const getColor = text => ({ '-': 'white', X: 'red', O: 'cyan' }[text]);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Gradient colors={['red', 'cyan']}>
        <BigText text="Tic Tac Toe" />
      </Gradient>
      <Box
        borderStyle="doubleSingle"
        display="flex"
        flexDirection="column"
        width={54}
        marginX={10}
      >
        {board.map((row, index) => (
          <Box key={index} display="flex" flexDirection="row">
            {row.map((value, rowIndex) => (
              <Box
                key={rowIndex}
                width={18}
                height={8}
                borderStyle="round"
                display="flex"
                paddingX={1}
                paddingY={1}
                alignItems="center"
                justifyContent="center"
              >
                <BigText
                  colors={[getColor(value)]}
                  text={value}
                  font={'simple'}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Newline />
    </Box>
  );
};

render(<Board />);
