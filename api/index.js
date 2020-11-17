import axios from "axios";

export default axios.create({
  baseURL: "https://covid-19-data.p.rapidapi.com/",
  responseType: "json",
  headers: {
    "x-rapidapi-key": "d773dfef9fmsh342e50dd5ed4b26p148876jsnf59f4c320cb7",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    useQueryString: true,
  },
});
