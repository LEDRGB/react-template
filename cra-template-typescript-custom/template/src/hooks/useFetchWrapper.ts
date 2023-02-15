import axios, { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import vocab from '../vocabulary';

export const useFetchWrapper = () => {

  function handleResponse(response: AxiosResponse) {
    console.log(response)
    if (response.status === 200) {
      return response.data
    } else {
      if ([401, 403].includes(response.status)) {
        toast.error(vocab.toasts.errors.sessionExpired);
      }

      const error = response.statusText;
      return Promise.reject(error);
    }

  }

  function request(method: string) {
    return (url: string) => {
      const options = {
        method,
        url
      };
      return axios.request(options).then(handleResponse)
    };
  }

  return {
    get: request('GET'),
    post: request('POST'),
    patch: request('PATCH'),
    delete: request('DELETE'),
  };
};
