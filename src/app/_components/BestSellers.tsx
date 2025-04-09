import Head from '../../components/heading'
import Menu from '@/components/menu'

const bestSellers = [
    {
        id: crypto.randomUUID(),
        name: 'Pizza 1',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
        basePrice: 1222.99,
        image: '/assets/images/pizza.png',
    },
    {
        id: crypto.randomUUID(),
        name: 'Pizza 2',
        description: 'lorem ipsum dolor sit amet consectetur.',
        basePrice: 10.99,
        image: '/assets/images/pizza.png',
    },
    {
        id: crypto.randomUUID(),
        name: 'Pizza 3',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
        basePrice: 15.99,
        image: '/assets/images/pizza.png',
    }
]
export default function BestSeallers() {
    return (
        <section className='section-gap container'>
            <div className='text-center mb-4'>
                <Head subTitle='check Out' title='Our best Sellers' />
            </div>
            <Menu items={ bestSellers } />
        </section>
    )
}
