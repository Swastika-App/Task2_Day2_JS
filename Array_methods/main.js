import { products } from './products.js';

// 1. Reduce: Calculate the total price of all products
let totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log('Total Price:', totalPrice);

// 2. Unshift: Add a new product to the beginning of the array
const newProduct = {
  id: 6,
  name: 'Mouse',
  price: 25,
  category: 'Accessories',
  rating: 4.3
};
products.unshift(newProduct);
console.log('After Unshift:', products);

// 3. Some: Check if any product is in the 'Accessories' category
const hasAccessories = products.some(product => product.category === 'Accessories');
console.log('Some Accessories:', hasAccessories);

// 4. Every: Check if all products are in the 'Electronics' category
const allElectronics = products.every(product => product.category === 'Electronics');
console.log('Every Electronics:', allElectronics);

// 5. FindIndex: Find the index of the product with rating 4.7
const highRatedIndex = products.findIndex(product => product.rating === 4.7);
console.log('Find Index of High Rated Product:', highRatedIndex);

// 6. Fill: Fill the array with a placeholder product
const placeholder = { id: 0, name: 'Placeholder', price: 0, category: 'Unknown', rating: 0 };
const filledProducts = products.slice(0, 3).fill(placeholder);
console.log('Filled Array:', filledProducts);

// 7. Reverse: Reverse the order of products
const reversedProducts = [...products].reverse();
console.log('Reversed Products:', reversedProducts);

// 8. Sort: Sort the products by price in ascending order
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log('Sorted by Price:', sortedProducts);
