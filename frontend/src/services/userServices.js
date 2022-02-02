import axios from "axios";
import { BASE_URL_BACK } from "../config";

export const authUser = async (email, password) => {
    console.log('en service');
  try {
      const {data} = await axios.post(
          `${BASE_URL_BACK}/users/login`, {email, password}
      );
      return data;
      
  } catch (error) {
      throw error;
  }  
};