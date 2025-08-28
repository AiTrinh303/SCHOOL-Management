const UserCard = ({type}:{type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-jojoPurple even:bg-jojo'>{type}</div>
  )
}

export default UserCard