import { Product } from '@/types';

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
};

export default ProductList;
