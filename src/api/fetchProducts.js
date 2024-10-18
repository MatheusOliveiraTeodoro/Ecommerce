const fetchProducts = async (query) => {
    const response = await fetch(`${query}`);
    const data = await response.json();

    return data.results;
}

export default fetchProducts;