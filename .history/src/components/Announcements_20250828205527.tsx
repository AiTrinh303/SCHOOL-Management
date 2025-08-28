"use client"

import Image from "next/image"

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>       
        <div className="flex items-center justify-between">
            <h1 className='text-xl font-semibold my-4'>Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-jojoSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <span className="text-sm text-gray-400">2 days ago</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Announcements