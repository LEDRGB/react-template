import rest, { IFetchRequest } from "..";


export const getData = ({ fetcher }: IFetchRequest): Promise<any> => {

  return fetcher.get(`${rest.path.GET_DATA}`);
};

