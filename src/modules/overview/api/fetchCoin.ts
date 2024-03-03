import { coingecko } from "@/libs/coingecko";

export async function fetchCoinData(coinName: string) {
  try {
    const response = await coingecko.get(`coins/${coinName}`);

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
