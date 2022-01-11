import Image from 'next/image'

type DataType = {
  item: {
    id: number
    title: string
    description: string
  }
}
export const ItemCard = (props: DataType) => {
  return (
    <div className="bg-white p-2 rounded-md  border border-gray-400">
      <div className='flex justify-center'>
          <Image src="/img/pizza.png" width={200} height={200} />
      </div>
      <p className='font-bold'>{props.item.title}</p>
      <p className='font-light'>{props.item.description}</p>
      <button className='p-2 bg-orange-700 text-orange-200 rounded-lg font-bold mt-2'>Add To cart</button>
    </div>
  )
};

