import React, { useEffect, useState } from 'react';



function Slider1() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

  

    return (
        <div className='mx-16 flex flex-wrap gap-8 md:mx-auto'>
        
                {products.map(product => (
                    <div key={product.id} className=' hover:shadow-2xl p-3'>
                        <img className='w-48' src={product.image} alt={product.title} />
                        <div className='mx-5'>
                        <p>Category: {product.category}</p>
                        <p>Price: ₹{product.price}</p>
                        <p>Rating: {product.rating.rate} ⭐️</p>
                        </div>
                    </div>
                ))}
           
        </div>
    );
}

export default Slider1;
