import React from 'react'

const ToursLayout = ({ children }) => {
    return (
        <div className='text-blue-600'>
            <div className='text-white'>
                {children}
            </div>
        </div>
    )
}

export default ToursLayout