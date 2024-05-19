"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
    id: string;
    name: string;
    price: string;
    img: string;
};

const Products = () => {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/crockicle');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const responseData: Product[] = await response.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {data.map((item) => (
                    <Link href={`/crockicle/${item.id}`} className="ml-12 bg-sky-600 rounded-3xl" key={item.id}>
                        <div>
                            <Image src={item.img} alt="img" width={200} height={200}/>
                            <div className="text-white font-bold p-4">
                                <h2 className="text-start">{item.name}</h2>
                                <span className="text-start">Price: {item.price}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
