import React from 'react'
import { IoBookSharp, IoPieChart, IoPeople, IoBookmark } from 'react-icons/io5'

const DashboardStatsGrid = () => {
  return (
    <div className='ml-4'> 
        <div className='flex gap-4 mt-6 '>
            <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-sky-500">
                        <IoBookSharp className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Total Books</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">200</strong>
                            <span className="text-sm text-green-500 pl-2">+343</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-orange-600">
                        <IoPieChart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Review</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">23</strong>
                            <span className="text-sm text-green-500 pl-2">-343</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-400">
                        <IoPeople className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Published</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">13</strong>
                            <span className="text-sm text-red-500 pl-2">-30</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-600">
                        <IoBookmark className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Total Read</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold"></strong>
                            <span className="text-sm text-red-500 pl-2">-43</span>
                        </div>
                    </div>
                </BoxWrapper>
        </div>

        <div className='mt-10 flex gap-4'>
            <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-sky-500">
                        <IoBookSharp className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Activity coming later</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">$54232</strong>
                            <span className="text-sm text-green-500 pl-2">+343</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-orange-600">
                        <IoPieChart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light"> Coming Soon </span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">$3423</strong>
                            <span className="text-sm text-green-500 pl-2">-343</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-400">
                        <IoPeople className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Coming Soon</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">12313</strong>
                            <span className="text-sm text-red-500 pl-2">-30</span>
                        </div>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-600">
                        <IoBookmark className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Coming Soon</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">16432</strong>
                            <span className="text-sm text-red-500 pl-2">-43</span>
                        </div>
                    </div>
                </BoxWrapper>
        </div>
    </div>
  )
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export default DashboardStatsGrid