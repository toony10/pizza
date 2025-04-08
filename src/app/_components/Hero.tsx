import Image from 'next/image'
import { Button, buttonVariants } from '@/components/ui/button'
import { CircleArrowRight } from 'lucide-react';
import Link from '@/components/sheared/link';
import { Routes } from '@/constants/enums';


export default function Hero() {
    return (
        <section className='container section-gap md:flex justify-between items-center'>
            <div className='md:w-1/2 flex flex-col gap-4 text-center md:text-start mb-7'>
                <h1 className='text-3xl font-bold text-black'>
                    Slice into Happiness
                </h1>
                <p className='text-gray-400 flex flex-col gap-0.5 text-md'>
                    <span>Craving Magic in Every Slice? 🍕</span>
                    At PizzaTo, we serve oven-fresh pizzas packed with joy and flavor. From late-night cravings to family feasts, order online and let deliciousness come to your door — fast, fun, and unforgettable.
                </p>
                <div className='flex gap-4 justify-center md:justify-start'>
                    <Link href={ `/${Routes.MENU}` } className={ `${buttonVariants({ size: 'lg' })} !px-4 !rounded-full !gap-0` }>
                        ORDER NOW
                        <CircleArrowRight className='ml-2' />
                    </Link>
                    <Link href={ `/${Routes.ABOUT}` } className='flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold'>
                        Learn More
                        <CircleArrowRight />
                    </Link>
                </div>
            </div>
            <div className='justify-center items-center md:w-1/2 hidden md:flex'>
                <Image src="/assets/images/pizza.png" alt='pizza' width={ 300 } height={ 300 } loading='eager' sizes='100vh' />
            </div>
        </section>
    )
}
