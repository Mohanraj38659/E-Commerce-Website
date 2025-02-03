export const products = [
  { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 200, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartphone", price: 800, image: "https://via.placeholder.com/150" }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};
