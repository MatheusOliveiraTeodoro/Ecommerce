export const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/produto'); 
    const data = await response.json();
    return data; 
};
