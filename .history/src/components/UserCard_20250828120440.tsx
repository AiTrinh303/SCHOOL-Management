const UserCard = ({type}:{type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-[]'>{type}</div>
  )
}

export default UserCard