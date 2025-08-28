const UserCard = ({type}:{type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-jojoPurple eve'>{type}</div>
  )
}

export default UserCard