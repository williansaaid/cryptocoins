import coinApi from "../clientProvider";
import { QueryKey, useQuery } from "@tanstack/react-query";

const QUERY_NAME = "Coins";
const URL = "/coins/markets?vs_currency=usd&per_page=50&page=1&sparkline=false&locale=en&precision=4"

export const getCoins = async () => {
    try {
        const response = await coinApi(URL);
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
    }
};

const useGetCoins  = () =>
    useQuery(
        [QUERY_NAME] as QueryKey,
        getCoins,
        { refetchInterval: 10000 }
    );
export default useGetCoins;