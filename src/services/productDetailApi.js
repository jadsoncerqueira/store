async function requestProductDetail(productId) {
  try {
    const endPoint = `https://api.mercadolibre.com/items/${productId}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
}

export default requestProductDetail;
