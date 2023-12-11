import axios from "axios";

const BASE_URL = `https://youtube138.p.rapidapi.com`;

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": `b5cdd0bf13msh9921b2146d003b0p10b5aejsn889e327cd922`,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
