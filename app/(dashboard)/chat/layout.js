import React from 'react'

const ChatLayout = ({ children }) => {
    return (
        <div className='text-blue-600'>
            <div className='text-white'>
                {children}
            </div>
        </div>
    )
}

export default ChatLayout