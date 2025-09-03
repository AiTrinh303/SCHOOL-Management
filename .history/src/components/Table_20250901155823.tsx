const Table = ({columns}: {columns:{header:string; accessor:string; className?:string}[]}) => {
  return (
    <div className='w-full mt-4'>
        <thead>
            <tr>
                {columns.map(col => (
                    <th key={col.accessor} className={col.className}>
                        {col.header}
                    </th>
                ))}
            </tr>
        </thead>
    </div>
  )
}

export default Table
