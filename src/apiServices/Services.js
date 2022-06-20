import axios from "axios";

export async function getCategoriesList() {
   res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
 
   return res.data
}

export async function getMealsList() {
    res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    return res.data
    }