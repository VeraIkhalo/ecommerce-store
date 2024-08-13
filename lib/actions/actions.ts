export const getCollections = async () => {
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
    return await collections.json()
  }
  
  export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
    return await collection.json()
  }
  
  export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    return await products.json()
  }
  
  export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
    return await product.json()
  }
  
  export const getSearchedProducts = async (query: string) => {
    const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
    return await searchedProducts.json()
  }
  
  export const getOrders = async (customerId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);
  
      // Log the response status and headers for debugging
      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers);
  
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Attempt to parse the response as JSON
      try {
        const jsonResponse = await response.json();
        return jsonResponse;
      } catch (jsonError) {
        // If parsing fails, log the full response text for debugging
        const textResponse = await response.text();
        console.error('Response is not valid JSON:', textResponse);
        throw new Error('Failed to parse response as JSON.');
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      return null; // or you could return a more specific error response depending on your use case
    }
  };
  
  
  export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
    return await relatedProducts.json()
  }