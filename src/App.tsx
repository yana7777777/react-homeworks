import './App.css';

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

interface ProductListProps {
    products: Product[];
}

function ProductList({ products }: ProductListProps) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>Цена: {product.price} ₽</p>
                    <p className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                        {product.inStock ? 'В наличии' : 'Нет в наличии'}
                    </p>
                </div>
            ))}
        </div>
    );
}

function App() {
    const products: Product[] = [
        { id: 1, name: 'Ноутбук', price: 75000, inStock: true },
        { id: 2, name: 'Мышь', price: 1500, inStock: false },
        { id: 3, name: 'Монитор', price: 12000, inStock: true },
    ];

    return (
        <div className="app">
            <h1>Домашнее задание: TypeScript</h1>
            <h2>Список товаров</h2>
            <ProductList products={products} />
        </div>
    );
}

export default App;