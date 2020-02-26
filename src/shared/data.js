import * as axios from 'axios';
import { API } from './config';

const getPlayers = async function() {
  
  try {
    
    const response = await axios.get(`${API}/players.json`);

    let data = parseList(response);
    
    return data;

  } catch (error) {
    //console.error(error);
    return [];
  }
};
// todo write logic to replace 0 with "clear"
const getScoring = async function() {
  
  try {
    
    const response = await axios.get(`${API}/scoring.json`);
    
    let data = parseList(response);
    
    return data;

  } catch (error) {
    //console.error(error);
    return [];
  }
};
const getCells = async function() {
  
  try {
    
    const response = await axios.get(`${API}/cellInfo.json`);

    let data = parseList(response);
    
    return data;

  } catch (error) {
    //console.error(error);
    return [];
  }
};

// const updateCell = async function(cell) {
//   try {
//     const response = await axios.put(`${API}/cellInfo/${cell.id}`, cell);
//     const updatedCell = parseItem(response, 200);
//     return updatedCell;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

const getCell = async function(row, value) {
  
  try {
    
    const response = await axios.get(`${API}/cellInfo.json`);

    let data = parseList(response);
    
    return data[row][value];

  } catch (error) {
    //console.error(error);
    return [];
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const Data = {
  getPlayers, 
  getScoring,
  getCells,
  getCell
};
