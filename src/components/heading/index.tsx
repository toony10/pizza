import React from 'react'

interface HeadProps {
    title: string,
    subTitle: string
}
export default function Head({ title, subTitle }: HeadProps) {
    return (
        <>
            <span className='uppercase text-accent font-semibold leading-4'>{ subTitle }</span>
            <h2 className='text-primary font-bold text-4xl italic'>{ title }</h2>
        </>
    )
}
