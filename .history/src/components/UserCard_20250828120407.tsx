const UserCard = ({type}:{type: string}) => {
  return (
    <div className='rounded-2xl odd:'>{type}</div>
  )
}

export default UserCard