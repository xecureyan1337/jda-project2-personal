// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';

// Update the interface to reflect that params is now a Promise
interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

// Mock product data - replace with your actual data source
const products = [
  { id: '1', name: 'Product 1', price: 29.99, description: 'A great product' },
  { id: '2', name: 'Product 2', price: 49.99, description: 'An even better product' },
  { id: '3', name: 'Product 3', price: 19.99, description: 'The best product' },
];

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Await the params Promise
  const { id } = await params;
  
  // Find the product
  const product = products.find(p => p.id === id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">
              ${product.price}
            </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata (also needs to await params)
export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  return {
    title: product ? `${product.name} - Product Details` : 'Product Not Found',
    description: product?.description || 'Product details page',
  };
}