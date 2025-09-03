import Image from "next/image"

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'> 
        {/* LEFT */}
        <div className="w-full xl:w-2/3">
        {/*TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER CARD */}
          <div className="bg-jojoSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image src="/profile.jpeg" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
            </div>  
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Ai Trinh</h1>
              <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="">
                  <Image src="/blood.png" alt="Math Teacher" width={11} height={16} className="w-4 h-4"/>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1"></div>
        </div>

        {/* BOTTOM */}
        <div className="">scheduled</div>
        
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-1/3">
          {/* TEACHER INFO */}
        </div>
    </div>

  )
}

export default SingleTeacherPage