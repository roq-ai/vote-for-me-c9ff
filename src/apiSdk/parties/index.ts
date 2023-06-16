import axios from 'axios';
import queryString from 'query-string';
import { PartyInterface, PartyGetQueryInterface } from 'interfaces/party';
import { GetQueryInterface } from '../../interfaces';

export const getParties = async (query?: PartyGetQueryInterface) => {
  const response = await axios.get(`/api/parties${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createParty = async (party: PartyInterface) => {
  const response = await axios.post('/api/parties', party);
  return response.data;
};

export const updatePartyById = async (id: string, party: PartyInterface) => {
  const response = await axios.put(`/api/parties/${id}`, party);
  return response.data;
};

export const getPartyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/parties/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePartyById = async (id: string) => {
  const response = await axios.delete(`/api/parties/${id}`);
  return response.data;
};
