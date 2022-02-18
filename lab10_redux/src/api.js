import axios from "axios";

const BASE_URL = "http://localhost:5000/car"

const http = axios.create({
    baseURL: "http://localhost:5000/car",
    headers: {
        'Content-type': 'application-json'
    }
});

export const getCars = async () => {
    const rawResponse = await http.get(`${BASE_URL}`);
    return rawResponse.data
}

export const getCar = async (id) => {
    const rawResponse = await http.get(`${BASE_URL}/${id}`);
    return rawResponse.data
}

export const getFilteredCar = async (brand, year, price) => {
    const rawResponse = await axios.get(`http://localhost:5000/car/brand=${brand}/year=${year}/price=${price}`)
    return rawResponse.data
}