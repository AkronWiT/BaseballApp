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
const getScores = async function() {
  
  try {
    
    const response = await axios.get(`${API}/cellInfo.json`);

    let data = parseList(response);
    
    return data;

  } catch (error) {
    //console.error(error);
    return [];
  }
};

const updateScore = async function(score) {
  try {
    const response = await axios.put(`${API}/scores/${score.id}`, score);
    const updatedScore = parseItem(response, 200);
    return updatedScore;
  } catch (error) {
    return null;
  }
};

const getScore = async function(row, value) {
  
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

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const Data = {
  getPlayers, 
  getScoring,
  getScores,
  getScore,
  updateScore
};
