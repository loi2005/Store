import axios from "axios";

const API_Base = "/assets/categories.json";
export const fetchCategories = async () => {
  try {
    const res = await axios.get(API_Base);
    console.log("API response:", res.data);
    return res.data.categories || res.data;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return [];
  }
};
