import * as axios from 'axios';

const getPlayers = async function() {
  
  try {
    
    const response = await axios.get(`api/players.json`);

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
    
    const response = await axios.get(`api/scoring.json`);
    
    let data = parseList(response);
    
    return data;

  } catch (error) {
    //console.error(error);
    return [];
  }
};
const getCells = async function() {
  
  try {
    
    const response = await axios.get(`api/cellInfo.json`);

    let data = parseList(response);
    
    return data;

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
  getCells
};
