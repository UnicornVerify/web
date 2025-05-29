import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { IoDocumentTextOutline } from "react-icons/io5";

const MyDocuments = () => {

    const { myDocuments, navigate, getMyDocuments } = useAppContext();

    useEffect(() => {
        getMyDocuments();
    }, [])

    return (
        <div className='h-screen overflow-y-scroll no-scrollbar p-2 py-4 sm:p-4 md:p-6 lg:p-8 bg-white'>
            <h1 className='text-xl sm:text-2xl font-semibold mb-4 text-gray-800'>My Documents</h1>

            {myDocuments.length === 0 ? (
                <div className='text-gray-400 flex flex-col justify-center items-center gap-1 mt-10'> <IoDocumentTextOutline size={32} className="text-red-500" />No documents found. </div>
            ) : (
                <div
                    className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-4' >
                    {myDocuments.filter((document) => document.isPreview).map((document) => (
                        <div key={document._id} onClick={() => { navigate(`/my-documents/${document._id}`); scrollTo(0, 0) }}
                            title={`UpdatedAt: ${document.updatedAt}`} className="w-full min-h-36 p-4 rounded-sm bg-slate-50 flex flex-col justify-center items-center border border-gray-300 gap-3 text-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-102 cursor-pointer"
                        >
                            <IoDocumentTextOutline size={32} className="text-primary-green" />
                            <h1 className="font-medium text-sm text-center break-words truncate w-full">
                                {document.name}
                            </h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyDocuments