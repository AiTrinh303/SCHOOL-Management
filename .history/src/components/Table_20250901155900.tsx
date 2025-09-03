const Table = ({columns}: {columns:{header:string; accessor:string; className?:string}[]}) => {
  return (
    <div className='w-full mt-4'>
        <thead>
            <ttr className="text-left text-gray-500 text-sm"r>
                {columns.map(col => (
                    <th key={col.accessor} className={col.className}>
                        {col.header}
                    </th>
                ))}
            </ttr>
        </thead>
    </div>
  )
}

export default Table
