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
                    <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">30.03.2025</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident laborum nobis labore perferendis sit tenetur ab, explicabo fugiat? Atque non ex temporibus pariatur. Possimus ab distinctio sapiente dicta necessitatibus fugiat, tenetur officiis minima ea?</p>
            </div>
            <div className="bg-jojoPurpleLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">30.03.2025</span>
                </div>
            </div>
            <div className="bg-jojoYellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">30.03.2025</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Announcements