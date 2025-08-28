import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
       {/* USER CARD */}
       <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staffs" />
       </div>
        {/* MIDDLE CHART */}
        <div className="flex-col flex gap-4 lg:flex-row ">
          <CountChart />
        </div>
        {/* BOTTOM CHART */}
        <div className="mt-4">
          
        </div>

      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 '>Right Content</div>
    </div>
  )
}

export default AdminPage