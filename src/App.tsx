import { useState } from 'react';
import ProductList from '@/components/ProductList';
import { generateProducts } from '@/utils';

const dummyProducts = generateProducts();

const filterProducts = (filterTerm: string) => {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
};

const App = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const filteredProducts = filterProducts(filterTerm);

  const handleUpdateFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(event.target.value);
  };

  return (
    <div id="app">
      <input type="text" onChange={handleUpdateFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
