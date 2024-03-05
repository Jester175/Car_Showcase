import axios from "axios";

import { FilterProps } from "@/types";

axios.defaults.baseURL = "https://cars-by-api-ninjas.p.rapidapi.com/v1"

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
    
    const headers = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    try {
      const response = await axios.get(
        `/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
          headers: headers,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }