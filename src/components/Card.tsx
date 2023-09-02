import { parseDDMMHH, parseDDMMYY, parseHH } from '@/utils/dateParse';
import Image from 'next/image';
import React from 'react'

interface Props {
    name: string,
    price: number,
    image: string,
    symbol: string,
    lastUpdated: string,
    market_cap: string,
}

const Card = ({
    name,
    price,
    image,
    symbol,
    lastUpdated,
    market_cap
}: Props ) => {
    return (
        <div
            className='rounded-xl shadow-2xl p-8 gap-3 w-96 flex flex-col justify-center items-center'
        >
            <div
                className='w-full flex justify-evenly pb-4 border-b-[1px] border-second/40 mb-2'
            >
                <div>
                    <p
                        className='uppercase font-semibold'
                    >
                        {symbol}
                    </p>
                    <h3 className='font-bold text-2xl'>
                        {name}
                    </h3>
                </div>
                <div
                    className="w-16 relative overflow-hidden h-16 rounded-full"
                >
                    <Image
                        src={image}
                        alt={`${name} logo`}
                        fill
                        draggable={false}
                        className="object-cover relative w-full"
                    />
                </div>
            </div>
            <div
                className='w-full flex justify-between items-center border-b-[1px] border-transparent hover:border-second/20 duration-200 ease-in-out'
            >
                <p className='font-semibold'>
                    Precio
                </p>
                <p>
                    {`$${price}`}
                </p>
            </div>
            <div
                className='w-full flex justify-between items-center border-b-[1px] border-transparent hover:border-second/20 duration-200 ease-in-out'
            >
                <p className='font-semibold'>
                    Market cap
                </p>
                <p>
                    {market_cap}
                </p>
            </div>
            <div
                className='w-full flex justify-between items-center border-b-[1px] border-transparent hover:border-second/20 duration-200 ease-in-out'
            >
                <p className='font-semibold'>
                    Actualización
                </p>
                <p>
                    {parseHH(lastUpdated)}
                </p>
            </div>
        </div>
    )
}

export default Card;