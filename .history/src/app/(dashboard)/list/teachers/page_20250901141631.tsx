import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const TeacherListsPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0 '>
      {/* TOP */}
      <div className=''>
        <h1 class>All Teachers</h1>
        <div className=''>
          <TableSearch />
          <div className="">
            <button>
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
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