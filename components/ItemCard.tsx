import Image from 'next/image'
import Link from 'next/link';

export const ItemCard = ({item}:any) => {
  return (
    <div className="bg-white p-2 rounded-md">
      <div className='flex justify-center'>
          <Image src="/img/pizza.png" width={200} height={200} />
      </div>
      <p className='font-bold uppercase text-lg text-orange-700'>{item.title}</p>
      <p className='font-bold uppercase text-lg text-dark-700'>${item.prices[0]}.00</p>
      <p className='font-light truncate'>{item.desc}</p>
      <Link href={`/foods/${item._id}`}>
        <button className='p-1 bg-orange-500 text-orange-200 rounded-lg font-bold mt-2 mx-2'>View Item</button>
      </Link>
    </div>
  )
};
