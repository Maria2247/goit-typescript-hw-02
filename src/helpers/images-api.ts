import axios from "axios";

const UNSPLASH_URL = "https://api.unsplash.com/search/photos";
const UNSPLASH_KEY = "Client-ID tSV24TxZuwntbIF_uG_gKPio8HDIDnPkONhO9vkHNyc";

export async function fetchUnsplashImages<T>(
  queryString: string,
  page: number
): Promise<T> {
  const resp = await axios.get(UNSPLASH_URL, {
    headers: {
      Authorization: UNSPLASH_KEY,
      Accept_version: "v1",
    },
    params: {
      query: queryString,
      page: page,
      per_page: 12,
    },
  });
  const respData: T = resp.data;
  console.log("🚀  response.data:", respData);
  return respData;
}
