import api from "../api";

const getAllSales = async () => {
    try {
        const response = await api.get("/all-sales");
        return response;
    } catch (error) {
        console.log(`Get all sales error: ${error}`)
    }
}

export default getAllSales;