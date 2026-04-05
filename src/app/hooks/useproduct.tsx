import { useQuery } from "@tanstack/react-query";

export const useProducts = (queryKey: string, queryFn: () => Promise<any>) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFn, // بس خلي caller يبعت دالة ترجع promise
  });
};