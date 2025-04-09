"use client"
import { Button } from '../ui/button'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { formatCurrency } from '../../lib/formatters'
const sizes = [
    { id: crypto.randomUUID(), name: 'Small', price: 10.99 },
    { id: crypto.randomUUID(), name: 'Medium', price: 12.99 },
    { id: crypto.randomUUID(), name: 'Large', price: 14.99 },
]

const extras = [
    { id: crypto.randomUUID(), name: 'Extra Cheese', price: 2.99 },
    { id: crypto.randomUUID(), name: 'Pepperoni', price: 1.99 },
    { id: crypto.randomUUID(), name: 'Mushrooms', price: 1.49 },
    { id: crypto.randomUUID(), name: 'Olives', price: 1.49 }
]
export default function AddToCartBtn({ item }: { item: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex justify-center mt-4'>
                    <Button className='rounded-full'>Add To Cart</Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <Image src="/assets/images/pizza.png" alt="pizza" width={ 100 } height={ 100 } className='w-full h-48 object-contain' />
                    <DialogTitle className='text-center text-gray-900 text-xl'>{ item.name }</DialogTitle>
                    <DialogDescription className='text-center text-gray-500'>
                        { item.description }
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className='flex flex-col gap-3 '>
                        <Label htmlFor="picke-size" className='text-gray-700 m-auto text-md'>pick your size</Label>
                        <SizeOptions sizes={ sizes } item={ item } />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <Label htmlFor="picke-size" className='text-gray-700 m-auto text-md'>Any extras?</Label>
                        <ExtraOptions extras={ extras } item={ item } />
                    </div>
                </div>
                <DialogFooter className='m-auto'>
                    <Button type="submit">Add to Cart</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}



function SizeOptions({ sizes, item }: { sizes: any, item: any }) {
    return (
        <RadioGroup defaultValue="comfortable">
            { sizes.map((size) => (
                <div key={ size.id } className="flex items-center space-x-2 border border-gray-300 p-4 rounded-md mb-2">
                    <RadioGroupItem value="default" id={ size.id } />
                    <Label htmlFor={ size.id } className='text-sm font-bold'>{ size.name } <span className='text-gray-800 font-light'>{ formatCurrency(size.price + item.basePrice) }</span></Label>
                </div>
            )) }
        </RadioGroup>
    )
}

function ExtraOptions({ extras, item }: { extras: any, item: any }) {
    return (
        <div className='flex flex-col gap-2'>
            { extras.map((extra) => (
                <div key={ extra.id } className="flex items-center space-x-2 border border-gray-300 p-4 rounded-md mb-2">
                    <Checkbox id={ extra.id } />
                    <Label htmlFor={ extra.id } className='text-sm font-bold'>{ extra.name } <span className='text-gray-800 font-light'>{ formatCurrency(extra.price + item.basePrice) }</span></Label>
                </div>
            )) }
        </div>
    )
}
