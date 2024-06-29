import React from 'react'
import image from '../Loading.gif'
const Spinner = () => {
    return (
        <div className='text-center'>
            <img src={image} alt='loadinig' />
        </div>
    )
}
export default Spinner
