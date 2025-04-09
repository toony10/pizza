import MenuItem from "./MenuItem";

export default function Menu({ items }: { items: any }) {
    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            { items.map((item) => (
                <MenuItem key={ item.id } item={ item } />
            )) }
        </ul>
    )
}
