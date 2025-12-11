import axios from 'axios';

const useAxios = () => {
  const get = (url) => axios.get(url);
  const post = (url, data) => axios.post(url, data);
  const put = (url, data) => axios.put(url, data);
  const patch = (url, data) => axios.patch(url, data);
  const del = (url) => axios.delete(url);

  return { get, post, put, patch, del };
};

export default useAxios;
