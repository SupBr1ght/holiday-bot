import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.HOLIDAY_API_KEY;
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

export const getHoliday = async (country) => {
  try {
    const response = await axios.get(`https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=${country}&year=${year}&month=${month}&day=${day}`);
    if (response.data.length === 0) {
      return "No info about holiday";
    }
    const data = response.data[0].name;
    return data;
  } catch (error) {
    return "No info about holiday";
  }
};