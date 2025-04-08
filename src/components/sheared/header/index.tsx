import Link from '../link'
import { Routes } from '@/constants/enums'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header>
            <div className='container flex justify-between items-center p-4'>
                <Link href={ Routes.ROOT } className='text-primary font-semibold text-2xl'>
                    🍕 PIZZA
                </Link>
                <Navbar />
            </div>
        </header>
    )
}
