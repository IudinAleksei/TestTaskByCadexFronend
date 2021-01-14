import { API_URL } from '../common/constants';

const requestToApi = async (params) => {
  try {
    const res = await fetch(`${API_URL}?${params}`);
    const data = (res.ok) ? await res.json() : await res.text();

    return data;
  } catch (err) {
    return 'Connection error';
  }
};

export default requestToApi;
