async function requestCategories() {
  try {
    const END_POINT = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(END_POINT);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

export default requestCategories;
