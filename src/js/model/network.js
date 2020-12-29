import { API_URL } from '../common/constants';

const requestToApi = async (params) => {
  try {
    const res = await fetch(`${API_URL}?${params}`);
    const data = (res.ok) ? await res.json() : 'connection error';

    return data;
  } catch (err) {
    return 'connection error';
  }
};

export default requestToApi;
