import React from 'react'

const Card = ({title, content}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 m-4 hover:bg-[#ff000045]">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{content}</p>
        </div>
    )
}

export default Card