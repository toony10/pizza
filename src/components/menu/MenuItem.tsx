import { formatCurrency } from "@/lib/formatters"
import Image from "next/image"
import AddToCartBtn from "./AddToCartBtn"

export default function MenuItem({ item }: { item: any }) {
    return (
        <li className='p-4 rounded-lg hover:shadow-md bg-gray-100 hover:bg-white transition duration-500 ease-in-out'>
            <Image src={ item.image } alt={ item.name } width={ 100 } height={ 100 } className='w-full h-48 object-contain rounded-lg mb-4' />
            <div className='flex justify-between'>
                <h3 className='text-xl font-semibold text-black'>{ item.name }</h3>
                <strong className='text-lg mt-2 text-gray-600'>{ formatCurrency(item.basePrice) }</strong>
            </div>
            <p className='text-gray-500 text-center mt-4'>{ item.description }</p>
            <AddToCartBtn item={ item } />
        </li>
    )
}
