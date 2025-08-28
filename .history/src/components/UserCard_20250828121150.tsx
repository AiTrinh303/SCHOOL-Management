const UserCard = ({type}:{type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-jojoPurple even:bg-jojoYellow flex-1'>
        {type}
        <div>
            <span>2024/25</span>
            <Image>
        </div>
    </div>
  )
}

export default UserCard