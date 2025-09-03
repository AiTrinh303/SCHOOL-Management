const Table = ({columns}: {columns:{header:string; accessor:string; className?:string}[]}) => {
  return (
    <div className='w-full mt-4'>
        <thead>
            <tr>
                {columns.map(col =>)}
            </tr>
        </thead>
    </div>
  )
}

export default Table