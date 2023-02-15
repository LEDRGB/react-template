import env from '../env';

export interface IMutationOptions {
  onSuccess?: () => void;
  onSettled?: () => void;
  onError?: () => void;
}

export interface IFetchRequest {
  fetcher: any;
  options?: RequestInit;
}

export default {
  path: {
    GET_DATA: `${env.apiUrl}/entries`,
  },
  method: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  },
};
