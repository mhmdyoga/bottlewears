import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Products = async() => {
   const response = await fetch('http://localhost:8080/crockicle')
  const data = await response.json();
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
          { data.map((items: any) => (
            <Link href={`/crockicle/${items.id}`} className="ml-12 bg-sky-600 rounded-3xl" key={items.id}>
              <Image src={items.img} alt="img" width={200} height={200}/>
              <div className="text-white font-bold p-4">
              <h2 className="text-start">{items.name}</h2>
              <span className="text-start">Price: {items.price}</span>
              </div>
            </Link>
           ))}
        </div>
    </div>
  )
}



export default Products