import { httpClient } from "../../api/httpClient";


 const productService = {
    searchProducts: async (query) => {
        const { q, skip } = query;
        return await httpClient.get(`products/search?q=${q}&limit=${12}&skip=${skip}&select=id,title,price,rating,images`);
    },
};

export default productService;