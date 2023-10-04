import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

const LibraryStatsGrid = () => {
  return (
    <div className='ml-4 mt-6'>
        <div className='flex gap-6'>
            <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-sky-500">
                        <IoBagHandle className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light">Total books</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">32</strong>
                            <span className="text-sm text-green-500 pl-2">+2</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-orange-600">
                        <IoPieChart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light">Total Read</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">15</strong>
                            <span className="text-sm text-green-500 pl-2">-3</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-yellow-400">
                        <IoPeople className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light">Total published</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">9</strong>
                            <span className="text-sm text-red-500 pl-2">-2</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-green-600">
                        <IoCart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light"></span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">56</strong>
                            <span className="text-sm text-red-500 pl-2">-4</span>
                        </div>
                    </div>
                </BoxWrapper>
        </div>

        <div className='flex gap-6 mt-10'>
            <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-sky-500">
                        <IoBagHandle className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light">Total books</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">32</strong>
                            <span className="text-sm text-green-500 pl-2">+2</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-orange-600">
                        <IoPieChart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light">Total Read</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">15</strong>
                            <span className="text-sm text-green-500 pl-2">-3</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-yellow-400">
                        <IoPeople className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light">Total published</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">9</strong>
                            <span className="text-sm text-red-500 pl-2">-2</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-30 w-30 flex items-center justify-center bg-green-600">
                        <IoCart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-white font-light"></span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">56</strong>
                            <span className="text-sm text-red-500 pl-2">-4</span>
                        </div>
                    </div>
                </BoxWrapper>
        </div>

        
    </div>
  )
}

function BoxWrapper({ children }) {
	return <div className="bg-yellow-800 rounded-sm p-20 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export default LibraryStatsGrid