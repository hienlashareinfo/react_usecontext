import Link from 'next/link'
import React from 'react'

const Mynavbar = () => {
    return (
        <div>
            <div className='flex flex-wrap gap-3'>
                <Link href={'/'}>Home</Link>
                <Link href={'/post'}>Posts</Link>
            </div>
        </div>
    )
}

export default Mynavbar
