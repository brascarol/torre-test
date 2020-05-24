import axios from 'axios';

const bioAxios = axios.create({
  baseURL: 'https://torre.bio/api/bios'
});

const jobAxios = axios.create({
  baseURL: 'https://torre.co/api/opportunities'
});

const searchAxios = axios.create({
  baseURL: 'https://search.torre.co',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true
  }
});


export {
  bioAxios,
  jobAxios,
  searchAxios

};

