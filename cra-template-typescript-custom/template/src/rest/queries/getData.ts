import { useMutation } from "@tanstack/react-query";
import { useFetchWrapper } from "../../hooks/useFetchWrapper";
import { getData } from "../requests/getData";



export const useGetDataMutation = (onSuccess?: (data: any) => void, onError?: () => void) => {
  const fetcher = useFetchWrapper();
  return useMutation(() => getData({ fetcher }), {
    onSuccess,
    onError,
  });
};


