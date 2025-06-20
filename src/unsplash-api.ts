import axios from "axios";
import { type Response } from "./unsplash-api.types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchData = async (
  image: string,
  currentPage: number
): Promise<Response> => {
  const response = await axios.get<Response>(`/search/photos`, {
    params: {
      query: image,
      client_id: "cZrUXKvs2_3Ih1ZnCPXpAr9jZVD-SOii34Zobyj9hPE",
      page: currentPage,
      per_page: 30,
    },
  });
  return response.data;
};
