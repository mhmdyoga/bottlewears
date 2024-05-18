import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const DetailProduct = async ({params: {id}}: any) => {
  const respones = await fetch(`http://localhost:8080/crockicle/${id}`);
  const crockicleDetail: any = await respones.json();

  return (
    <div className="flex lfex-row gap-3 p-5">
        <div className='flex flex-col md:flex-row gap-5 bg-sky-600 rounded-3xl'>
            <Image src={crockicleDetail.img} alt="detail" width={360} height={360}/>
        </div>
        <div className='text-black p-5 flex flex-col gap-4'>
          <h1 className="text-3xl font-bold">{crockicleDetail.name}</h1>
        <h2 className='font-medium text-sm'>{crockicleDetail.description}</h2>
        <span>Price:{crockicleDetail.price}</span>
         <div>
          <Link href={`/orders/${crockicleDetail.id}`} className='bg-sky-600 p-4 rounded-xl'>Checkout</Link>
        </div>
        </div>
    </div>
  )
}

export default DetailProduct