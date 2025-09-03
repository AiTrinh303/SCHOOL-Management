import Image from "next/image"

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex item">
            <Image src="/search.png" alt="Search" width={14} height={14} />
            <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
    </div>
  )
}

export default TableSearch