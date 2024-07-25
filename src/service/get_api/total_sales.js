import api from "../api"

const getTotalSales = async () => {
    try {
        const response = await api.get("/total-sales");
        return response
    } catch (error) {
        console.log(`Total sales error: ${error}`)
    }
}

export default getTotalSales;