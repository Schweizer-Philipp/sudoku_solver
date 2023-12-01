import React, { useState } from 'react';
import styled from 'styled-components';

interface SudokuProps {
  size: number;
}

const SudokuWrapper = styled.div`
    border: red 10px solid;
    display: flex;
    width: 200px;
    height: 200px;
`;

interface SudokuContextType {
    size: number;
    sudoku: number[][];
};

const createEmptyArray = (size: number): number[][] => {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
};
  
const SudokuContext = React.createContext<SudokuContextType>({
size: 9,
sudoku: createEmptyArray(9),
});

const Sudoku: React.FC<SudokuProps> = ({ size }) => {

    console.log()
    return (
        <SudokuWrapper>
        </SudokuWrapper>
    );
};

export default Sudoku;
