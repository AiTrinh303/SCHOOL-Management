import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const TeacherListsPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0 '>
      {/* TOP */}
      <div className=''>
        <h1>All Teachers</h1>
        <div className=''>
          <TableSearch />
          <div className="">
            <button>
              <Image src="/filter." alt="Add" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className=''>

      </div>

      {/* PAGINATION */}
      <div className=''>

      </div>

    </div>
  )
}

export default TeacherListsPage