import axios from 'axios';
import { config } from '../config';

function getAll() {
  return new Promise((resolve, reject) => {
    axios.get(`${config.url}/campaigns`)
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getCampaignStats(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${config.url}/campaigns/${id}/stats`)
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function activateCampaign(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${config.url}/campaigns/${id}/activate`)
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        const { data } = error.response;
        reject(data.error.message);
      });
  });
}

function deactivateCampaign(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${config.url}/campaigns/${id}/deactivate`)
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        const { data } = error.response;
        reject(data.error.message);
      });
  });
}

export const campaignsService = {
  getAll,
  getCampaignStats,
  activateCampaign,
  deactivateCampaign,
};
