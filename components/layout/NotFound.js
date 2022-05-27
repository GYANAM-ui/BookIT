import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
    return (
        <div className='page-not-found-wrapper'>
            <Image
                src="/static/bookit.png"
                width={100}
                height={100}
                className='logo-error'
            />
            <h1 id='title_404'>404!</h1>
            <h3 id='description_404'>Page Not Found. Go to 
                <Link href="/">
                    <a className='text-decoration-none text-danger'> Homepage</a>
                </Link>
            </h3>
        </div>
    )
}

export default NotFound
