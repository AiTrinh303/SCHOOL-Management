const Pagination = () => {
  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
        <button disabled className="px-4 py-2 border rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Pre</button>
        <div className="flex-1 text-center">
            <button className="px-2 rounded-sm jojo">1</button>
        </div>
        <button className="px-4 py-2 border rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination